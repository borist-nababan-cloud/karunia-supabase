# CLAUDE.md

This is the **Supabase** backend for Karunia Motor (a dealership platform). It replaces the
Strapi v5 backend that still lives at `../karuniastrapi`.

## Current state — Phase 1 (schema only)

This project contains a Supabase CLI layout and versioned SQL migrations that reproduce the
Strapi data model as Postgres tables. There is **no application code** (no Node server, no
controllers) — data is served via PostgREST / the Supabase JS client.

Migrations live in `supabase/migrations/` (`0001` → `0007`) and run in lexical order on
`supabase db reset`. `supabase/seed.sql` holds sample reference data.

## Commands

```bash
supabase start     # bring up the local Docker stack (ports 54321–54324)
supabase db reset  # recreate public schema + replay migrations + seed
supabase status    # API URL + anon / service_role keys
supabase db push   # apply migrations to a linked Cloud project
```

## Conventions

- **Tables/columns are snake_case.** Strapi's camelCase is intentionally dropped; the frontend is
  being rewritten to consume snake_case (or a thin mapper). Do not reintroduce camelCase columns.
- **PKs are `bigint generated always as identity`**, except `profiles.id uuid` (1:1 with `auth.users`).
- **Components are real 1:1 tables**, not jsonb. `jsonb` is reserved for genuinely schemaless
  fields (`sales_profiles.location`, `storage_objects.formats`).
- **Preserved Strapi quirks** (do not "fix" without discussion): `vehicle_types.vehicle_group` and
  `sales_profiles.namasupervisor` are plain text, not FKs.
- **RLS is enabled on every table, fail-closed (no policies)** until Phase 2 installs role-based
  policies. Test via `service_role` / Studio, which bypass RLS.

## SPK business logic

The only non-trivial logic: `spks.no_spk` is auto-generated (`NNN/SPK/<roman-month>/<year>`,
advisory-locked per month) and immutable. See `supabase/migrations/0004_spk_numbering.sql`.
This fixes the Strapi version, which was broken in v5 and emitted `TMP/...<timestamp>` for all rows.

## Later phases (not started)

Phase 2: auth (`handle_new_user` trigger, sign-in flows), role-based RLS, storage upload policies.
Phase 3: data migration from Strapi SQLite + frontend rewrite to the Supabase JS client.
