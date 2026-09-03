# Eduspray Enquiry System

## What is This?

**Eduspray Enquiry System** is a complete digital enquiry and form management solution for educational institutions. It enables prospective students to submit enquiries online through a dynamic, customizable form, which are then processed and managed through a secure admin panel.

The system automatically generates PDF forms from submissions, stores them securely in Supabase cloud storage, and optionally syncs data to Google Sheets for team collaboration. Admins can search, filter, and manage all submissions with real-time notifications, PDF preview capabilities, and bulk operations.

**Key Technologies:**
- **Frontend:** Next.js 15 (React 19) with TypeScript
- **Backend:** Supabase (PostgreSQL + Auth + Realtime + Storage)
- **PDF Generation:** pdf-lib with custom field stamping
- **Real-time Updates:** Supabase Realtime channels
- **Authentication:** Supabase Auth with 8-hour session TTL

---

## Quick Start

### Prerequisites

- **Node.js** LTS (18+)
- **Supabase Project** (free tier works)
- **Google Sheets API credentials** (optional, for sync feature)
- **npm** or **yarn**

### Setup Steps

**1. Clone & Install**
```bash
git clone <repository>
cd eduspray-enquiry-system
npm install
```

**2. Environment Configuration**
```bash
cp .env.example .env.local
```

Fill in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

**3. Database Setup**
Push migrations to Supabase:
```bash
npx supabase db push
```

**4. Create First Admin**
Set temporary credentials and create admin:
```bash
export ADMIN_EMAIL=admin@example.com
export ADMIN_PASSWORD=tempPassword123
npm run seed:admin
```

**5. Configure Session Timeout**
In Supabase Dashboard:
- Go to **Authentication > Settings > Sessions**
- Set **Maximum session lifetime** to **28,800 seconds** (8 hours)

**6. (Optional) Google Sheets Sync**
See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for setup instructions.

**7. Run Development Server**
```bash
npm run dev
```

Visit:
- **Public Form:** http://localhost:3000
- **Admin Login:** http://localhost:3000/admin/login

---

## Complete Feature List

### 📋 Public Enquiry Form
- **Dynamic Questions:** Admin-managed form fields (add, edit, reorder, delete)
- **Multiple Field Types:** Text, number, email, date, textarea, select, phone
- **Form Validation:** Real-time field validation with error messages
- **Required Field Support:** Mark questions as optional or required
- **Submit Animations:** Confetti effect on successful submission
- **Terms & Privacy:** Checkbox to accept terms before submission
- **Client IP Tracking:** Optional IP logging for abuse prevention
- **Responsive Design:** Mobile-friendly form layout

### 🎯 Admin Dashboard
- **Quick Stats:** Total submissions, today's count, last hour's rate
- **Recent Submissions Table:** Latest 5-10 enquiries with quick links
- **Personalized Greeting:** Time-aware greeting with admin's display name
- **Real-time Notifications:** Instant alert when new enquiries arrive
- **Search & Filter:** Find enquiries by ID, name, course, email, phone
- **Date Filtering:** Filter by today, yesterday, last 7/30 days, or custom range
- **Status Filtering:** Filter by submission status
- **CSV Export:** Download filtered enquiries as spreadsheet

### 👤 Admin Profile Management
- **Customizable Display Name:** Edit your preferred name shown in greeting
- **Profile Dropdown:** Quick access to settings and logout
- **Email Display:** Current admin email shown in profile menu
- **Session Info:** Auto-logout after 8 hours of inactivity

### 📄 Enquiry Detail View
- **Full Submission Data:** All submitted information organized by category
- **PDF Preview:** Embedded PDF viewer with zoomable form
- **Download PDF:** Save generated form locally
- **Print PDF:** Direct browser printing support
- **Google Sheets Sync:** Manual retry for failed syncs
- **Delete with Confirmation:** Require "DELETE" text to confirm deletion

### 📑 PDF Management
- **Field Mapping Editor:** Drag-and-drop placement of form fields on PDF
- **Multi-page Support:** Map fields to different PDF pages
- **Field Types:** Support for text, number, checkbox, dropdown fields
- **Text Styling:** Alignment (left/center/right), multiline text
- **Undo/Redo:** Full history of mapping changes
- **Live Preview:** Real-time PDF preview while editing
- **Zoom Controls:** Pan and zoom the PDF workspace

### ❓ Question Management
- **CRUD Operations:** Add, edit, reorder, and delete questions
- **Field Validation:** Min/max length, number format (integer/decimal)
- **Character Restrictions:** Allow/disallow letters, numbers, special characters
- **Drag-and-drop Reordering:** Change question display order visually
- **Active/Inactive:** Disable questions without deleting
- **Required Field Toggle:** Set which questions are mandatory
- **Search & Filter:** Find questions by name or field key
- **Unsaved Indicator:** Clear indication of pending changes
- **Batch Save:** Save all changes at once

### 🔄 Google Sheets Integration (Optional)
- **Automatic Sync:** New submissions automatically added to sheet
- **Real-time Row Updates:** Edit existing rows without duplicates
- **Manual Retry:** Sync failed submissions from admin panel
- **Error Tracking:** See sync errors per enquiry
- **Status Indicators:** Sync status and timestamp visible in admin
- **Server-side Only:** API credentials never exposed to clients

### 🔐 Security & Authentication
- **Supabase Auth:** Secure authentication via Supabase
- **8-hour Session TTL:** Automatic logout after 8 hours
- **Admin Authorization:** Only users in `admins` table can access panel
- **Row-level Security:** Database policies enforce data access control
- **Service Role Key:** Kept server-side only, never exposed to browser
- **CSRF Protection:** Next.js built-in CSRF protection
- **No Bulk Operations:** Prevent accidental mass deletion
- **Confirmation Required:** All destructive operations require explicit confirmation

### 🎨 User Experience
- **Loading States:** All async buttons show spinner and "Saving...", "Syncing...", etc.
- **Duplicate Prevention:** Disabled buttons prevent accidental duplicate submissions
- **Toast Notifications:** 5-second auto-dismiss notifications for success/error
- **Back Button:** Native browser history navigation (no hardcoded links)
- **Fixed Header:** Persistent navigation bar while scrolling
- **Proper Page Titles:** SEO-friendly titles for each page
- **Enlarged Logo:** High-visibility Eduspray branding

### 📱 Responsive & Accessible
- **Mobile Responsive:** Works on phone, tablet, desktop
- **Semantic HTML:** Proper accessibility markup
- **Aria Labels:** Screen reader support
- **Keyboard Navigation:** Full keyboard support for forms and menus
- **Focus Management:** Clear focus indicators
- **Color Contrast:** WCAG compliant text contrast

---

## Important Configuration

### PDF Coordinates Setup
The file `lib/pdf/coordinates.ts` contains starting PDF field coordinates. **These MUST be calibrated against your actual printed form before production use.** Start with dummy values and adjust using the PDF mapping editor.

### Client IP Tracking
By default, the system trusts `cf-connecting-ip` and `x-real-ip` headers. For production:

```bash
# In your hosting platform settings or .env.local:
TRUSTED_PROXY_HEADERS=cf-connecting-ip,x-real-ip,x-forwarded-for
```

Common proxy headers by host:
- **Vercel/Cloudflare:** `cf-connecting-ip`
- **AWS/Nginx:** `x-real-ip`
- **Custom:** `x-forwarded-for` (use with caution, easily spoofed)

### Database Migrations Order
Always run migrations in order:
```
001 → 002 → 003 → 004 → 005 → 006 → 007 → 008 → 009 → 010 → 011
```

Running out of order will cause foreign key errors.

---

## Recent Updates (v2)

### 🔄 Session Management
- Proper Supabase SSR session handling with Next.js 15 middleware
- Automatic session refresh on every request
- Admins stay logged in across page navigation and refresh
- 8-hour TTL with NO silent extension
- Full logout clears all cookies and tokens

### 👤 Admin Display Name
- New customizable display name field
- Edit in profile dropdown menu
- Used in personalized greeting
- Falls back to email-derived name if not set
- Persists in Supabase database

### 🔔 Real-time Notifications
- Instant alerts for new enquiries via Supabase Realtime
- Dashboard stats auto-refresh without page reload
- Notification toast with link to view enquiry
- 5-second auto-dismiss
- No polling required

### ⏱️ Button Loading States
All async actions now show loading indicators:
- Submit / Sign in
- Save Changes
- Sync to Google Sheets
- Delete enquiry
- Export CSV
- Download PDF

---

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
npm run test         # Run unit tests
npm run test:watch   # Watch mode for tests
npm run seed:admin   # Create first admin user
npm run test:pdf     # Test PDF generation
```

---

## File Structure

```
eduspray-enquiry-system/
├── app/                    # Next.js app directory (routes)
│   ├── page.tsx           # Public enquiry form
│   ├── enquiry/           # Enquiry form routes
│   ├── admin/             # Admin panel routes
│   │   ├── enquiries/     # Enquiry management
│   │   ├── questions/     # Question management
│   │   ├── settings/      # PDF mapping editor
│   │   └── login/         # Admin login page
│   ├── api/               # Backend API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── admin/            # Admin panel components
│   ├── enquiry/          # Form components
│   └── ui/               # Reusable UI components
├── lib/                   # Utilities & helpers
│   ├── auth/             # Authentication logic
│   ├── pdf/              # PDF generation & stamping
│   ├── enquiry/          # Form validation
│   ├── hooks/            # React hooks
│   └── supabase/         # Supabase clients
├── supabase/            # Database migrations
│   └── migrations/       # SQL migration files
├── public/              # Static assets
│   ├── templates/       # PDF templates
│   └── images/          # Logo & images
└── types/               # TypeScript type definitions
```

---

## Support & Troubleshooting

**Admin login shows "not authorized":**
- Run `npm run seed:admin` to create your admin record
- Or manually insert into Supabase `admins` table

**Migrations failed:**
- Make sure you run them in order (001 → 011)
- Use `npx supabase db push` instead of manual SQL

**PDF fields not positioned correctly:**
- Edit `lib/pdf/coordinates.ts` with your PDF's actual dimensions
- Use the PDF mapping editor to visually place fields

**Google Sheets sync not working:**
- See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
- Check service account credentials in `.env.local`

**Session expires too quickly:**
- Verify Supabase session TTL set to 28,800 seconds (8 hours)
- Clear browser cookies and try again

---

## License

Proprietary. All rights reserved.
