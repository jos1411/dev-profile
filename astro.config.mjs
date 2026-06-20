import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.SITE_DOMAIN ? `https://${process.env.SITE_DOMAIN}` : 'https://{domain}';
if (siteUrl.includes('{domain}')) {
  console.warn('⚠️  WARNING: {domain} placeholder detected in site URL. Set SITE_DOMAIN env var or update astro.config.mjs before deployment.');
}

export default defineConfig({
  output: 'static',
  site: siteUrl,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
  ],
});
