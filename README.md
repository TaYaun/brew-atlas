# Brew Atlas TH

Production-oriented launch codebase for Brew Atlas TH at `brewatlasth.com`.

## Stack
- Astro + TypeScript
- Cloudflare Pages / Workers adapter
- Cloudflare D1 for affiliate click logging
- Static-first content architecture with server routes only where needed

## Launch catalog
8 launch products are stored in `src/data/products.ts` and render publicly when their status is `active`.

## Local development
```bash
npm install
npm run dev
```

## Cloudflare deployment
1. Create a Cloudflare Pages project linked to the GitHub repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Create D1 database named `brew-atlas-th`.
5. Replace `REPLACE_AFTER_D1_CREATE` in `wrangler.jsonc` with the actual D1 database id.
6. Apply `db/schema.sql` to the D1 database.
7. Point the custom domain at the Pages project.
8. Add `brewatlasth.com` as the production custom domain and set `PUBLIC_SITE_URL=https://brewatlasth.com`.

## Affiliate tracking
Public CTA links use `/go/:slug`. The Pages Function records a click to D1 when available, then redirects to the Shopee affiliate URL.

## SEO included
- canonical URLs
- meta title/description
- sitemap integration
- robots.txt
- clean product slugs
- affiliate `rel="sponsored nofollow"`

## Production status
- Responsive catalog and filtering
- Product reviews and brewing guides
- Product/Review structured data, canonical URLs, sitemap and robots
- Affiliate redirect tracking via D1
- Cloudflare Web Analytics support
- Git-based admin workflow and automated production deployment
