# KSLC Website

The Phase 1 official website for Korean Senior Life Campus (KSLC) — a bilingual
(Korean/English), 12-page, senior-friendly site built with Next.js and exported
as plain static HTML/CSS so it can be hosted anywhere.

## Requirements

- [Node.js](https://nodejs.org) 20 or later (Node is already installed on this
  machine at `C:\Program Files\nodejs`; if `npm` isn't recognized in a new
  terminal, close and reopen VS Code's terminal so it picks up the updated PATH).

## Getting started in VS Code

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Edit any file under `app/` and the
page reloads automatically.

## Project structure

```
app/
  (ko)/            Korean pages — the default language, served at "/"
  (en)/en/         English pages — mirrored structure, served at "/en/..."
components/        Shared Header, Footer, PageHero, Notice
lib/nav.ts         Menu labels, contact info, and KO<->EN link mapping
lib/forms.ts        Formspree endpoint IDs (see "Set up the forms" below)
public/            Logo, board photos, downloadable presentations
```

Every Korean page under `app/(ko)/` has a matching English page at the same
path under `app/(en)/en/`. For example `app/(ko)/services/page.tsx` pairs with
`app/(en)/en/services/page.tsx`. The language switcher in the header always
links to the matching page in the other language.

## Set up the forms (required before launch)

The consultation request, institutional referral, and general contact forms
submit via [Formspree](https://formspree.io) — a free service that emails you
form submissions with no backend required.

1. Create a free account at https://formspree.io.
2. Create three forms (or one form with three names) and note each Form ID
   (the part after `/f/` in the endpoint URL, e.g. `mzzabc123`).
3. Open `lib/forms.ts` and replace the placeholder IDs:

```ts
export const FORMSPREE = {
  request: "https://formspree.io/f/YOUR_REQUEST_FORM_ID",
  referral: "https://formspree.io/f/YOUR_REFERRAL_FORM_ID",
  contact: "https://formspree.io/f/YOUR_CONTACT_FORM_ID",
};
```

4. In Formspree's dashboard, set each form's confirmation email to go to the
   KSLC staff inbox that should receive submissions.

The forms already redirect to a "thank you" page on the KSLC site after
submission (`/thank-you` and `/en/thank-you`), with the exact confirmation
wording from the build proposal (e.g. "상담 요청이 접수되었습니다..."). That
redirect is hardcoded to `https://www.kslcampus.org/...` — once the domain is
live this works automatically; until then, testing a live Formspree submission
will redirect to the real domain rather than localhost.

## Build and deploy

```bash
npm run build
```

This produces a fully static site in `out/` — plain HTML, CSS, JS, and images,
with no server required. Upload the contents of `out/` to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, or traditional shared
hosting/cPanel) and point `www.kslcampus.org` at it.

To preview the production build locally before deploying:

```bash
npm run build
npx serve out
```

## Content to confirm before going live

This site was built from the KSLC Phase 1 build proposal and the official
brand/vision documents, but a few things are placeholders you should review:

- **Operating hours** ("평일 오전 9시 – 오후 5시") appear on the home, contact,
  and request pages — confirm the real hours.
- **Board member photos** in `public/team/` are large source files (up to
  2.4MB each); compress them (e.g. with [Squoosh](https://squoosh.app)) before
  launch so pages load quickly on mobile.
- **Board bios**: only name and title are shown for each director, since no
  100–150자 bio text was available. Add bios in `app/(ko)/leadership/page.tsx`
  and `app/(en)/en/leadership/page.tsx` if you'd like them.
- **Resources page** currently only links the two official presentation
  files. Add the brochure, checklist, and policy briefs mentioned in the
  build proposal as they're finalized.
- **Legal pages** (privacy, terms, accessibility, etc.) are drafted to match
  the build proposal's requirements but are not a substitute for legal
  review — especially before collecting any consultation request data.
- **501(c)(3) / tax-deductibility language** has intentionally been left off
  every page, per the build proposal's instruction not to use it until
  nonprofit status is confirmed. Add it once approved.
- Google Analytics / Search Console aren't wired in yet — add your
  measurement ID when ready (ask to have this added, or paste your tracking
  snippet into `app/(ko)/layout.tsx` and `app/(en)/layout.tsx`).

## Design system

Colors, type, and spacing follow the official KSLC brand guide:

- KSLC Navy `#0E2A47`, KSLC Gold `#C8A44D`, Warm White `#F8F8F5`
- Korean type in Noto Sans KR, English headings/labels in Montserrat
- 18px body text on desktop (16px minimum on mobile), 48px+ buttons, and no
  autoplay video or heavy animation, per the senior-friendly and WCAG 2.2 AA
  goals in the build proposal.

All shared styling lives in `app/globals.css`.
# KCLC-Website
