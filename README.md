# Eduspray Enquiry System

Supabase-backed enquiry system for public form submissions and admin-only PDF management with optional Google Sheets sync.

## Setup

1. Install Node.js LTS.
2. Copy `.env.example` to `.env.local`.
3. Add the Supabase URL, anon key, and service-role key.
4. (Optional) Configure Google Sheets credentials for real-time sync — see [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
5. Run `npm install`.
6. Run `npm run dev`.

## Important

`lib/pdf/coordinates.ts` contains starting PDF coordinates. They MUST be calibrated against the physical printed form before production.

The supplied form is stored at `public/templates/entry-form.pdf`.

Apply `supabase/migrations/001_initial_schema.sql` through `010_google_sheets_sync.sql` in order in the Supabase SQL editor. Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` temporarily, then run `npm run seed:admin` to create the first authorized admin.

In production, configure `TRUSTED_PROXY_HEADERS` with the documented client-IP header(s) supplied by your hosting platform, separated by commas. The default trusts `cf-connecting-ip` and `x-real-ip`; `x-forwarded-for` is not trusted by default. Local testing reports `::1` for IPv6 localhost or `127.0.0.1` for IPv4 localhost. A real public IP cannot be inferred from localhost.

In Supabase Dashboard, set Authentication > Settings > Sessions > Maximum session lifetime to 8 hours. The application also disables automatic token refresh for the admin browser client and signs out at the eight-hour token boundary.

## Features

### Admin Panel
- Fixed white header with Eduspray logo
- Time-aware personalized greeting using admin's email name
- Dashboard with enquiry statistics
- Enquiry search and filtering
- Detailed enquiry view with PDF preview
- Manual sync to Google Sheets button (when configured)

### Google Sheets Integration (Optional)
- Automatic sync on form submission
- Manual retry via admin panel
- Real-time row updates (no duplicates)
- Server-side credentials only
- Configurable sheet name and spreadsheet

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed configuration.

### Form Management
- Dynamic question management
- PDF field mapping and validation
- Real-time PDF preview in admin panel
- Support for multiple field types (text, number, select, textarea, etc.)

### Security
- Admin authentication with 8-hour session TTL
- Row-level security (RLS) in Supabase
- Service account credentials for Google API (never exposed to clients)
- No bulk deletion capability
- Delete confirmation required

