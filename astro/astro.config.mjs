// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    // Ensure Vite properly processes scripts
    build: {
      assetsInlineLimit: 0
    }
  },
  // Enable scripts to be processed by Vite
  experimental: {
    clientPrerender: true
  }
});