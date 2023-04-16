import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/edge';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), react(), image()]
});