// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.tsx",
    "./src/components/**/*.tsx",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xl': '1280px', // You can customize this if needed
        "2xl": "1400px",
      },

    },
  },
  presets: [sharedConfig],
} satisfies Config

export default config;
