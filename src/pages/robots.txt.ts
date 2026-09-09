export function GET(){ return new Response('User-agent: *\nAllow: /\nSitemap: https://brewatlasth.com/sitemap-index.xml\n', {headers:{'Content-Type':'text/plain'}}); }
