import { products } from '../../src/data/products';
import { equipmentStore } from '../../src/data/equipment';
const LINKS = Object.fromEntries([
  ...products.filter(p => p.status === 'active').map(p => [p.slug, p.affiliateUrl]),
  [equipmentStore.slug, equipmentStore.affiliateUrl],
]);
interface Env { DB?: D1Database }
export const onRequestGet: PagesFunction<Env> = async ({ params, request, env }) => {
  const slug = String(params.slug || '');
  const target = LINKS[slug];
  if (!target) return new Response('Not found', {status:404});
  try {
    if (env.DB) {
      const url = new URL(request.url);
      await env.DB.prepare('INSERT INTO affiliate_clicks (product_slug, referrer, campaign, clicked_at) VALUES (?, ?, ?, datetime(\'now\'))')
        .bind(slug, request.headers.get('referer') || '', url.searchParams.get('utm_campaign') || '').run();
    }
  } catch (e) { console.error('click tracking failed', e); }
  return new Response(null, {status:302, headers:{Location:target,'Cache-Control':'no-store','Referrer-Policy':'strict-origin-when-cross-origin'}});
};
