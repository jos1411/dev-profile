import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    prefixDefaultLocale: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
  ],
});
