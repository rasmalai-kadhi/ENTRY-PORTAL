# Eduspray Enquiry System

Supabase-backed enquiry system for public form submissions and admin-only PDF management.

## Setup

1. Install Node.js LTS.
2. Copy `.env.example` to `.env.local`.
3. Add the Supabase URL, anon key, and service-role key.
4. Run `npm install`.
5. Run `npm run dev`.

## Important

`lib/pdf/coordinates.ts` contains starting PDF coordinates. They MUST be calibrated against the physical printed form before production.

The supplied form is stored at `public/templates/entry-form.pdf`.

Apply `supabase/migrations/001_initial_schema.sql` in the Supabase SQL editor. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` temporarily, then run `npm run seed:admin` to create the first authorized admin.

Apply migrations `002` through `007` in order before deploying the current application. In production, configure `TRUSTED_PROXY_HEADERS` with the documented client-IP header(s) supplied by your hosting platform, separated by commas. The default trusts `cf-connecting-ip` and `x-real-ip`; `x-forwarded-for` is not trusted by default. Local testing reports `::1` for IPv6 localhost or `127.0.0.1` for IPv4 localhost. A real public IP cannot be inferred from localhost.
