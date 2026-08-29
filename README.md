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
  (en)/            English pages — the default language, served at "/"
  (ko)/ko/         Korean pages — served at "/ko/..."
  global-not-found.tsx   Custom 404 (required since there are two root layouts)
components/        Shared Header, Footer, PageHero, Notice
lib/nav.ts         Menu labels, contact info, and EN<->KO link mapping
lib/forms.ts        Formspree endpoint (see "Set up the forms" below)
public/            Logo, hero photo, board photos, downloadable presentations
```

English is the default language, served unprefixed at `/`. Every English page
under `app/(en)/` has a matching Korean page at the same path prefixed with
`/ko`, under `app/(ko)/ko/`. For example `app/(en)/services/page.tsx` pairs
with `app/(ko)/ko/services/page.tsx`, served at `/services` and `/ko/services`
respectively. The language switcher in the header always links to the
matching page in the other language — this is driven by `lib/nav.ts`, so
individual pages never hardcode the `/ko` prefix themselves.

## Set up the forms (required before launch)

The consultation request, institutional referral, and general contact forms
all submit to one [Formspree](https://formspree.io) endpoint — a free service
that emails you form submissions with no backend required. Each form sends
its own `_subject` field (e.g. "[KSLC] 상담 요청" vs "[KSLC] 일반 문의"), so
even sharing one endpoint, submissions stay clearly labeled in the inbox.

1. Go to https://formspree.io and sign up **using kslcampus.org@gmail.com**
   as the account email — Formspree sends notifications to the account owner's
   email by default, so this is the simplest way to get everything landing
   in that inbox.
2. Create one form (any name works, e.g. "KSLC Website").
3. Copy its endpoint ID (the part after `/f/` in the URL Formspree shows you,
   e.g. `mzzabc123`) and open `lib/forms.ts`:

```ts
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

Replace `YOUR_FORM_ID` with the real ID. That's the only thing that needs to
change — all three forms already point at this one constant.

4. Formspree's free tier requires confirming your first submission by email
   before the form goes fully live — submit a test consultation request once
   this is wired up and confirm it from kslcampus.org@gmail.com.

The forms submit via JavaScript (`components/FormspreeForm.tsx`) and redirect
to a "thank you" page on the KSLC site after a successful submission
(`/thank-you` for English, `/ko/thank-you` for Korean), with the exact
confirmation wording from the build proposal (e.g. "상담 요청이
접수되었습니다..."). This redirect is client-side, so it works the same on
localhost, a preview deploy, or the live domain.

## Build and deploy

```bash
npm run build
```

This produces a fully static site in `out/` — plain HTML, CSS, JS, and images,
with no server required.

To preview the production build locally before deploying:

```bash
npm run build
npx serve out
```

## Going live on kslcampus.org (cPanel)

The canonical domain is `kslcampus.org` (no `www`) — that's baked into every
form's confirmation redirect and into the page metadata already.
`www.kslcampus.org` will redirect to it via the included `.htaccess`.

1. **Point the domain at your hosting.** In your domain registrar's DNS
   settings, set the A record for `kslcampus.org` (and `www`) to your cPanel
   host's IP address — your hosting provider's welcome email or cPanel's
   "Domains" page will have the exact IP/nameservers to use. If the domain is
   registered somewhere other than the host, this is usually an A record
   change, not a full nameserver change.
2. **Upload the site.** Run `npm run build`, then upload everything *inside*
   `out/` (not the `out` folder itself) to `public_html/` via cPanel's File
   Manager or FTP. This includes the `.htaccess` file — make sure your FTP
   client is set to show hidden files, or it'll skip it silently.
3. **Enable SSL.** In cPanel, go to SSL/TLS Status (or "AutoSSL") and issue a
   free Let's Encrypt certificate for `kslcampus.org` and `www.kslcampus.org`.
   This usually only works once DNS is already pointed at the host. Then turn
   on "Force HTTPS Redirect" for the domain.
4. **Verify the www redirect.** Visit `http://www.kslcampus.org` and confirm
   it lands on `https://kslcampus.org`. The redirect rule is already in
   `public/.htaccess`.
5. **Re-check the forms.** Submit a test consultation request and confirm it
   (a) emails you via Formspree and (b) redirects to
   `https://kslcampus.org/thank-you?form=request` with the right message.
   This won't work correctly until both Formspree is configured (see above)
   *and* the domain is live, since the redirect URL is hardcoded to the real
   domain.

## Content to confirm before going live

This site was built from the KSLC Phase 1 build proposal and the official
brand/vision documents, but a few things are placeholders you should review:

- **Operating hours** ("평일 오전 9시 – 오후 5시") appear on the home, contact,
  and request pages — confirm the real hours.
- **Board member photos** in `public/team/` are large source files (up to
  2.4MB each); compress them (e.g. with [Squoosh](https://squoosh.app)) before
  launch so pages load quickly on mobile.
- **Board bios**: only name and title are shown for each director, since no
  100–150자 bio text was available. Add bios in `app/(en)/leadership/page.tsx`
  and `app/(ko)/ko/leadership/page.tsx` if you'd like them.
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
