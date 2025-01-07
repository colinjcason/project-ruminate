import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f7cbc0",
          "primary-content": "#150f0e",
          "secondary": "#11639a",
          "secondary-content": "#d1dfeb",
          "accent": "#DEF7EA",
          "accent-content": "#121513",
          "neutral": "#f8f5f1",
          "neutral-content": "#070f0c",
          "base-100": "#790e4a",
          "base-200": "#680b3f",
          "base-300": "#580735",
          "base-content": "#e7cfd8",
          "info": "#0d3b66",
          "info-content": "#d1dfeb",
          "success": "#5aad90",
          "success-content": "#030b07",
          "warning": "#bb1674",
          "warning-content": "#f7d5e2",
          "error": "#600b3b",
          "error-content": "#e1cdd4",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui
  ],
} satisfies Config;
