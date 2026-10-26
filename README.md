# Eden Eco Diary — Premium Island Edition

A Next.js 15 / React 19 / TypeScript / Tailwind CSS 4 storefront for an independent Sri Lankan handmade jewellery brand.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Browse http://localhost:3000.

## Main routes

- `/` editorial homepage with campaign imagery
- `/shop` product catalogue
- `/wishlist` local wishlist
- `/products/[slug]` product details

## Assets

- `public/images/products/` — actual client-supplied product photographs. These are the definitive product images.
- `public/images/campaign/` — AI-generated editorial images derived from client product imagery. Editorial depictions should be compared against original photos before commercial use.

## Commercial readiness

Product titles are provisional, and price fields are `null` until verified by the client. No payment collection or live checkout has been implemented. The shopping bag and wishlist are for demonstration. Do not launch checkout until prices, stock, material descriptions, contact details, shipping and payment integration are completed and verified.

## Build checks

```bash
npm run typecheck
npm run build
```

## Deploy

Create a new GitHub repository, commit the project, connect that repository to Vercel, and configure your custom domain. Never commit payment credentials or other secrets.

## Visual design

Forest green and warm ivory, botanical typography, cinematic Sri Lankan rainforest campaigns, accessible responsive shop components and reduced-motion support.
