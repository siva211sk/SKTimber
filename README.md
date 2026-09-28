# Siva Karthik Timber Depot

A responsive, SEO-ready single-page timber supplier website built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons. Navigation scrolls to sections on the homepage, including product details and the contact form. Product details and business contact information are maintained in local TypeScript configuration; enquiries are prepared for WhatsApp and are not stored or sent by a backend.

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
npm run typecheck
npm run build
npm start
```

## Configure before launch

Update `src/data/site-config.ts`:

- `businessName` and `shortName` if the displayed business name needs changing.
- `siteUrl` to the deployed canonical website origin; it currently uses `https://www.example.com`.
- The phone display value and `phoneHref` in `tel:+...` format.
- The WhatsApp number in international digits (country code included, no `+`), email display value and `emailHref` in `mailto:...` format, and the verified business address.
- Social profile URLs if the business uses them.

The contact form validates the visitor's name and phone number and opens a prefilled WhatsApp message. Set the WhatsApp number before launch. Until configured, the floating enquiry link leads to the contact form and form submissions explain that WhatsApp is not configured. No form data is transmitted to or stored by this site.

## Products and images

`src/data/products.ts` is the source of truth for the collection and product detail sections on the homepage. Teakwood is the only confirmed product currently listed; add other products only after confirming their details. Product pricing, stock and certifications are intentionally not claimed. Previous `/contact` and `/wood-collection` URLs redirect to the matching homepage sections.

The local images in `public/images/` are initial visual placeholders sourced from Unsplash:

- `forest-canopy.jpg` — homepage and social sharing.
- `timber-detail.jpg` — teakwood product imagery.
- `architectural-interior.jpg` — about section.

Replace these with properly licensed business photography at the same paths (or update the image paths in the relevant components and product data). Use descriptive alt text for any replacement.

## Deployment

Deploy on a Node.js-compatible host that supports Next.js, such as Vercel. Set the project root to this repository, install dependencies with `npm install`, and use `npm run build` as the build command. No database, CMS, environment secrets or external image host are required.
