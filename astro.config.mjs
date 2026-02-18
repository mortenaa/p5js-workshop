// @ts-check
import { defineConfig } from 'astro/config';
import rehypeCopyCode from './src/utils/rehype-copy-code.js';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/p5js-workshop/',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    rehypePlugins: [rehypeCopyCode],
  },
});