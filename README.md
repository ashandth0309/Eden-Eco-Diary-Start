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


## Premium V2 changes

- Added `Atmosphere` client component for a tasteful scroll-progress indicator and pointer ambience on desktop.
- Improved editorial hover, dark/light visual continuity, responsive hero spacing, and reduced-motion support.
- Corrected homepage story navigation and non-existent collections anchor.
- Original item images remain in `public/images/products`; AI imagery is restricted to editorial campaigns.

### Build status
Dependency installation could not finish in the authoring environment. Run `npm install`, `npm run typecheck`, `npm run lint`, and `npm run build` locally before deploying.

### GitHub
The GitHub connector returned HTTP 404 for `ashandth0309/Eden-Eco-Diary-Start`, so these changes were **not pushed**. To commit locally after cloning or extracting, use `git add .`, `git commit -m "Improve Eden cinematic storefront"`, then `git push -u origin <your-branch>`.

## V3 mobile image cropping fixes
- Hero banner uses natural 16:9 aspect ratio on phones rather than filling a portrait viewport.
- Homepage hero copy is moved under the image on phones, with comfortable spacing.
- Lookbook, island story, craft and category images use `object-fit: contain` in correctly sized mobile frames to preserve their full compositions.
- Closing banner uses an uncropped 16:9 image with the call to action beneath it.
- Updated typography and overflow rules for 360px–430px mobile widths.
- Note: letterboxing/background space is intentional: avoiding image crop is prioritized over edge-to-edge fill.
