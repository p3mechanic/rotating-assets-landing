# PT Velocity Power Engineering Website

Production-oriented Next.js website for **PT Velocity Power Engineering (PT VPE)**.

## Features

- Bilingual UI: default **ID**, selectable **EN** with localStorage persistence
- Mobile-first responsive layout with overflow protection
- Multi-page SEO architecture:
  - `/`
  - `/about`
  - `/profile`
  - `/services`
  - `/services/[slug]`
  - `/portfolio`
  - `/partners`
  - `/certifications`
  - `/contact`
- JSON-LD schema: Organization, Services, Certifications, Video, FAQ, Portfolio
- Company video profile embed
- Official square logo asset integrated
- Company profile PDF and visual pages integrated
- ISO 45001, ISO 9001, and ISO 14001 certificate previews integrated
- Full-stack RFQ/contact endpoint at `/api/contact`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Main content file

Most structured company data is in:

```text
app/lib/site.ts
```

Update `siteConfig.url` with the final production domain before deployment.

## Header fixed patch

Header sudah dipaksa menggunakan `position: fixed` melalui class `site-header-fixed`, dengan spacer tinggi header agar konten tidak ketutup. Mobile menu juga dibuat fixed di bawah header sehingga tidak mendorong layout dan tidak ikut bergeser saat halaman discroll.
