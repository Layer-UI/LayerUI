// Import the Tailwind CSS Config type for better TypeScript support
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

// Define the configuration object
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.tsx",            // Target app-specific files
    "./src/components/**/*.tsx",      // Target components specifically
    "../../packages/ui/**/*.{jsx,tsx}", // Explicitly target shared UI components
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1280px", // Customize as needed
        "2xl": "1400px",
      },
    },
  },
  presets: [sharedConfig],
};

// Export the configuration object
export default config;
