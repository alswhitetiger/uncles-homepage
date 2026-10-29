import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Hosted on GitHub Pages for now. When knsuncles.com points here, set site to 'https://knsuncles.com' and remove base.
export default defineConfig({
  site: 'https://alswhitetiger.github.io',
  base: '/uncles-homepage',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
