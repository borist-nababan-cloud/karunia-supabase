# Convert MySQL stock.sql to PostgreSQL migration

$inputPath = "docs/table_structure/stock.sql"
$outputPath = "supabase/migrations/0008_stock.sql"

# Start the migration file with the table creation
$header = @"
-- Migration: Stock table
-- Converts MySQL stock table to PostgreSQL with all data

-- Create stock table
CREATE TABLE IF NOT EXISTS stock (
    id_kendaraan varchar(30) PRIMARY KEY,
    id_status_stock varchar(30) NOT NULL DEFAULT '',
    no_rangka varchar(30) DEFAULT 'NONE',
    no_mesin varchar(30) DEFAULT 'NONE',
    id_type varchar(30) DEFAULT 'NONE',
    id_warna varchar(255) DEFAULT 'NONE',
    tgl_masuk date DEFAULT '2010-01-01',
    id_transaksi varchar(30) DEFAULT 'NONE',
    tahun char(5) NOT NULL DEFAULT '0',
    biaya_bbn numeric NOT NULL DEFAULT 0,
    harga numeric NOT NULL DEFAULT 0,
    taked char(1) NOT NULL DEFAULT 'N',
    notes varchar(255) DEFAULT '',
    no_rrn varchar(50) DEFAULT 'NONE',
    no_do varchar(50) DEFAULT 'NONE',
    tgl_do date DEFAULT '2000-01-01',
    jual char(1) NOT NULL DEFAULT 'N',
    kirim char(1) NOT NULL DEFAULT 'N'
);

-- Insert data
"@

Write-Host "Converting stock.sql to PostgreSQL format..."

# Read the input file and extract INSERT statements
$lines = Get-Content $inputPath
$insertCount = 0
$buffer = @()
$bufferSize = 500  # Number of INSERTs per batch

foreach ($line in $lines) {
    if ($line -match '^INSERT INTO `stock` VALUES \((.+)\);') {
        $values = $matches[1]
        # Convert MySQL string escaping to PostgreSQL
        $values = $values -replace "\''", "''''"  # MySQL escaped single quote to PostgreSQL double single quote
        $insertCount++
        $buffer += "INSERT INTO stock VALUES ($values) ON CONFLICT (id_kendaraan) DO NOTHING;"
        
        if ($buffer.Count -ge $bufferSize) {
            $buffer | Out-File -Append -FilePath $outputPath -Encoding utf8
            $buffer = @()
            Write-Host "Processed $insertCount inserts..."
        }
    }
}

# Write remaining inserts
if ($buffer.Count -gt 0) {
    $buffer | Out-File -Append -FilePath $outputPath -Encoding utf8
}

Write-Host "Conversion complete! Processed $insertCount INSERT statements."
Write-Host "Output: $outputPath"
