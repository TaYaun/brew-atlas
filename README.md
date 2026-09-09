# Brew Atlas

Production-oriented launch codebase for Brew Atlas.

## Stack
- Astro + TypeScript
- Cloudflare Pages / Workers adapter
- Cloudflare D1 for affiliate click logging
- Static-first content architecture with server routes only where needed

## Launch catalog
8 supplied products are stored in `src/data/products.ts`. Product #6 is intentionally set to `hold` because it appears to duplicate product #4 with a different Shopee affiliate URL. It will not render publicly until verified.

## Local development
```bash
npm install
npm run dev
```

## Cloudflare deployment
1. Create a Cloudflare Pages project linked to the GitHub repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Create D1 database named `brew-atlas`.
5. Replace `REPLACE_AFTER_D1_CREATE` in `wrangler.jsonc` with the actual D1 database id.
6. Apply `db/schema.sql` to the D1 database.
7. Point the custom domain at the Pages project.
8. Update `site` in `astro.config.mjs` and sitemap/robots URLs if the final domain differs from `brewatlas.com`.

## Affiliate tracking
Public CTA links use `/go/:slug`. The Pages Function records a click to D1 when available, then redirects to the Shopee affiliate URL.

## SEO included
- canonical URLs
- meta title/description
- sitemap integration
- robots.txt
- clean product slugs
- affiliate `rel="sponsored nofollow"`

## Next production work
- Final brand logo/assets
- Search/filter UI
- Long-form review and guide library
- Structured data (Article/Product/Breadcrumb)
- Cloudflare Web Analytics
- Git-based CMS/admin workflow
- Domain + production QA
