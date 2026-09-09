export function GET(){ return new Response('User-agent: *\nAllow: /\nSitemap: https://brewatlas.com/sitemap-index.xml\n', {headers:{'Content-Type':'text/plain'}}); }
