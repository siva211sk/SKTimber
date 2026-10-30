# Sivakarthik Timber Depot

A responsive, SEO-ready single-page timber supplier website built with Next.js App Router and TypeScript. Navigation scrolls to sections on the homepage, including the wood collection and the contact form. Business contact information is maintained in a local TypeScript configuration file; enquiries are prepared for WhatsApp and are not stored or sent by a backend.

**Live site:** [https://www.sktimbers.com](https://www.sktimbers.com)

## Requirements

- Node.js 20.9 or newer
- npm

## Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To verify the production version:

```bash
npm run lint
npm run build
npm start
```

## Configure

All business details live in `src/data/site-config.ts`:

- `businessName` and `shortName` — displayed business name.
- `siteUrl` — canonical website origin. Currently set to `https://www.sktimbers.com`.
- Phone numbers and `phoneHref` in `tel:...` format.
- `whatsappNumber` in international digits (country code included, no `+`).
- `email` and `emailHref` in `mailto:...` format. Currently set to `info@sktimbers.com`.
- `address` — verified business address shown in the contact section.
- Social profile URLs if the business uses them.

The contact form validates the visitor's name and phone number and opens a prefilled WhatsApp message. No form data is transmitted to or stored by this site.

## Wood collection

The five wood types (Palash, Teak, Neem, Jamun, Babuca) are defined directly in `src/components/home/WoodCollection.tsx`. Images are served from `public/images/` and automatically converted to AVIF/WebP by Next.js image optimisation.

## Images

All images are in `public/images/`:

- `homeBackground.jpg` — hero background and social sharing image.
- `about.png` — about section.
- `logo.jpeg` — header logo.
- `ballarsha.jpeg` — Palash wood.
- `teak.jpeg` — Teak wood.
- `neam.jpeg` — Neem wood.
- `jamun.jpeg` — Jamun wood.
- `babuca.jpeg` — Babuca wood.
- `woodcollectionbackground.jpeg` — wood collection section background.

Replace any image at the same path and Next.js will automatically serve the optimised version on next build.

## Deployment

Deployed on Vercel. Set the project root to this repository, install with `npm install`, and build with `npm run build`. No database, CMS, environment secrets or external image host are required.

Previous `/contact` and `/wood-collection` URLs redirect to the matching homepage sections via `next.config.ts`.
