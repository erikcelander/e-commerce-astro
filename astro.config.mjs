import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import dotenv from "dotenv";
import vercel from "@astrojs/vercel/serverless";
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  output: "server",
  adapter: vercel(),

  vite: {
    define: {
      "process.env.PUBLIC_SUPABASE_URL": JSON.stringify(
        process.env.PUBLIC_SUPABASE_URL,
      ),
      "process.env.PUBLIC_SUPABASE_ANON_KEY": JSON.stringify(
        process.env.PUBLIC_SUPABASE_ANON_KEY,
      ),
    },
  },
});
