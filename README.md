# Eden Eco Diary — Luxury Handmade Jewellery Storefront

A cinematic, responsive Next.js storefront using the client's 20 real jewellery photographs. Sri Lankan nature-inspired visual identity, shopping catalogue, detail pages, wishlist, cart drawer, search and collection filtering.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To validate:

```bash
npm run typecheck
npm run lint
npm run build
```

## Routes

- `/` — premium editorial homepage
- `/shop` — filterable catalogue
- `/products/[slug]` — individual product details
- `/wishlist` — saved favourites

## What is ready

- Real product photography (20 supplied originals, converted into optimized WebP assets)
- Responsive layouts and animated editorial design
- Search, category filters, cart state, wishlist state, and product pages
- Local storage for cart and wishlist
- SEO metadata and modern Next.js App Router foundation

## What must be confirmed before launch

- Product names are **working editorial names**, not verified official product names.
- Prices are deliberately `null`; these are rendered as **Price on request**.
- Materials, dimensions, stock, shipping, returns, real customer reviews, contact and social links, and brand claims need client verification.
- Cart works as a demo, but checkout/payment is deliberately disabled.
- Client should confirm privacy policy and applicable e-commerce legal obligations before launch.
- No authentic lifestyle model or workshop photography was supplied, so this design relies on the real product images and cinematic CSS atmosphere rather than pretending stock photos show Eden artisans.

## GitHub deployment

```bash
git init
git add .
git commit -m "Initial Eden Eco Diary Next.js storefront"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Import the repository into Vercel with the default Next.js build settings after verification. Never commit secrets.

## Assets

Photos are client-provided and may not be redistributed without client permission. Assets are contained in `public/images/products`.
