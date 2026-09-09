import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://brewatlas.com',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'never'
});
