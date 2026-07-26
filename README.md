# Karunia Motor — Supabase backend

Supabase-native schema for the Karunia Motor dealership platform, migrated from the Strapi v5
project at `../karuniastrapi`. **Phase 1 = schema only** (tables, enums, FKs, and the SPK
auto-numbering trigger). Auth, storage uploads, RLS policies, data migration, and the frontend
rewrite are later phases.

## Prerequisites

- [Supabase CLI](https://supabase.com/docs/guides/cli) ≥ 2.x (`supabase --version`)
- Docker (running) — `supabase start` spins up the local stack via Docker
- Node ≥ 20

## Run locally (staging)

```bash
supabase start        # pull images, bring up the stack on ports 54321–54324
supabase db reset     # drop + recreate `public`, run migrations 0001→0007, then seed.sql
supabase status       # prints the API URL + anon/service_role keys
```

| Service | URL / DSN |
|---|---|
| API (PostgREST) | `http://127.0.0.1:54321` |
| Studio UI | `http://127.0.0.1:54323` |
| Postgres | `postgresql://postgres:postgres@127.0.0.1:54322/postgres` |
| Auth site URL | `http://127.0.0.1:3000` (the Next.js dashboard) |

Ports deliberately avoid Strapi (1337) and the dashboard (3000).

## Deploy to Supabase Cloud (production)

```bash
supabase login                # sets SUPABASE_ACCESS_TOKEN
supabase link --project-ref <your-project-ref>
supabase db push              # applies migrations 0001→0007 to the Cloud project
```

## Schema overview

Migrations under `supabase/migrations/`:

| File | Contents |
|---|---|
| `0001_storage_objects.sql` | `storage_objects` table + public storage buckets (media model) |
| `0002_dealership_core.sql` | `vehicle_groups`, `vehicle_types`, `colors`, `supervisors`, `branches` |
| `0003_sales_and_spk.sql` | `sales_profiles`, `spks`, the three 1:1 SPK components, `payment_files` |
| `0004_spk_numbering.sql` | `generate_spk_number()` + BEFORE INSERT/UPDATE triggers (advisory-locked) |
| `0005_content_blog.sql` | `authors`, `categories`, `articles`, shared components, `content_blocks`, `abouts`, `globals` |
| `0006_profiles.sql` | `user_role` enum + `profiles` (1:1 with `auth.users`) |
| `0007_enable_rls.sql` | RLS enabled on every table, fail-closed (policies come in Phase 2) |

**Naming:** all tables/columns are `snake_case` (Strapi's `camelCase` is dropped — the frontend
will be rewritten against the Supabase JS client). PKs are `bigint generated always as identity`
(except `profiles.id uuid`, 1:1 with `auth.users`).

### SPK auto-numbering

`spks.no_spk` is auto-generated on insert (`NNN/SPK/<roman-month>/<year>`) and is immutable.
This ports — and **fixes** — the Strapi logic, which was silently broken in v5 (it called a
non-existent v4 API and fell back to a `TMP/...<timestamp>` value for every record).

## Verify

In Supabase Studio → SQL Editor (or `psql` to the DSN above):

```sql
-- 1. Auto-number: no_spk is generated when omitted.
insert into public.spks (tanggal, nama_customer, alamat_customer, no_telepon_customer)
values ('2026-07-26', 'Test', 'Jl. Test', '0812')
returning no_spk;   -- -> '00X/SPK/VII/2026'

-- 2. Immutability: changing no_spk is rejected.
update public.spks set no_spk = '999/SPK/VII/2026' where no_spk = '001/SPK/VII/2026';
-- ERROR: SPK number is immutable: cannot change 001/SPK/VII/2026 to 999/SPK/VII/2026
```

PostgREST nested embedding (proves every FK is declared) — replace `$SERVICE_ROLE_KEY` from
`supabase status`:

```bash
curl 'http://127.0.0.1:54321/rest/v1/spks?select=id,no_spk,sales_profiles(sales_uid,surename),spk_section_units(no_rangka,vehicle_types(name),colors(colorname))' \
  -H "apikey: $SERVICE_ROLE_KEY" -H "Authorization: Bearer $SERVICE_ROLE_KEY"
```

## Roadmap (out of Phase 1)

- **Phase 2 — Auth & access:** signup trigger on `auth.users` → `profiles`; role-based RLS policies
  (SALES = own SPKs, SPV = team, ADMIN = all); link `profiles` ↔ `sales_profiles`.
- **Phase 2 — Storage:** upload flow + per-bucket storage policies; image-transform `formats`.
- **Phase 3 — Data migration:** ETL from Strapi SQLite (`../karuniastrapi/.tmp/data.db`) into these tables.
- **Phase 3 — Frontend rewrite:** swap the Strapi REST client for the Supabase JS client.
