# Brew Atlas TH administration

The production site is static-first and Git-managed. This keeps hosting cost and attack surface low.

## Content workflow

1. Edit catalog data in `src/data/products.ts`.
2. Add product images to `public/products` using WebP or JPEG.
3. Edit guide metadata in `src/data/guides.ts` and guide pages in `src/pages/guides`.
4. Open a pull request. CI runs Astro checks and a complete static build.
5. Merge to `main`; GitHub Actions deploys the tested `dist` directory to Cloudflare Pages.

GitHub provides authentication, revisions, review, rollback and the launch admin editing surface without a database-backed CMS subscription. A visual editor can later be added over the same schema.

## Product checklist

- Unique ID and slug
- Accurate brand, size, roast and origin
- Product image and descriptive alt text
- Affiliate URL only in the catalog; the redirect imports that same catalog
- Editorial copy does not imply first-hand testing unless verified
- Set `status: 'active'` only after checking every field

## Analytics

- Set `PUBLIC_CF_ANALYTICS_TOKEN` to enable Cloudflare Web Analytics.
- D1 records product slug, referring page, campaign and UTC timestamp.
- Do not add email, IP address or user-agent fields.

```sql
SELECT product_slug, COUNT(*) AS clicks
FROM affiliate_clicks
WHERE clicked_at >= datetime('now', '-30 days')
GROUP BY product_slug
ORDER BY clicks DESC;
```

## Production configuration

- GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- GitHub variables: `PUBLIC_SITE_URL`, `PUBLIC_CF_ANALYTICS_TOKEN`
- Cloudflare Pages D1 binding: `DB`
- Apply `db/schema.sql` once
