import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  site: 'http://127.0.0.1',
  output: 'server',
  adapter: vercel()
});