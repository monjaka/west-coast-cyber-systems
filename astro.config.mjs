import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://westcoastcybersystems.com.au',
  output: 'static',
  integrations: [sitemap()]
});
