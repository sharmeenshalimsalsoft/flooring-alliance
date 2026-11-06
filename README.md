# Flooring & Surfaces Alliance — Frontend Preview

Vite + React + TypeScript + Tailwind CSS frontend for the unified flooring & surfaces alliance platform.

**Scope of this build:** Frontend UI only. No authentication, Salesforce, database, or API functionality.

Brand name/logo are temporary and configurable in `src/config/brand.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build
npm run preview  # preview production build
```

## What’s included

### Public website
- Homepage (hero, audiences, stats, about, suppliers, benefits, locations, services, news, CTA, testimonials, footer)
- About, Mission, Markets, Membership paths, Benefits, Application form UI
- Supplier directory + detail
- Locations (client-side filter UI on sample data)
- Resources + detail, Training, News + detail, Events, Summit, Podcast, Contact
- Privacy, Terms, Accessibility placeholders

### Member portal (UI shells)
- Login, Forgot password, MFA screens
- Dashboard, Community, Offers, Documents, Learning, Financial Center

### Admin (UI shells)
- Overview, Members, Content, Moderation, Audit logs

## Key routes

| Area | Path |
|------|------|
| Home | `/` |
| Membership | `/membership` |
| Apply | `/membership/apply` |
| Suppliers | `/suppliers` |
| Locations | `/locations` |
| News | `/news` |
| Contact | `/contact` |
| Member login | `/portal/login` |
| Portal dashboard | `/portal` |
| Financial Center UI | `/portal/financial` |
| Admin | `/admin` |

## Temporary brand

Edit `src/config/brand.ts` when the client supplies the final name and assets.

## Design system

Colors and typography tokens live in `src/index.css` (`@theme`) and match the agreed warm walnut / brass / ivory palette with Cormorant Garamond + Manrope.

## Not in this build

- Backend / PostgreSQL / Salesforce
- Real auth, MFA, RBAC, audit logging
- Form submission / email / newsletter processing
- Live financial data or real member records
- Pricing of any kind
