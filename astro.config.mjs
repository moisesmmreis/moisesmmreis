import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
;
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  integrations: [tailwind(), react(), image()]
});