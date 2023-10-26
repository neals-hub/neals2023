import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://neals2023.github.io/neals2023',
  base: '/neals2023',
  integrations: [tailwind()]
});