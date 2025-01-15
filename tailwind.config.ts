import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        ruminate: {
          primary: "#790e4a",
          "primary-content": "#f7cbc0",
          secondary: "#11639a",
          "secondary-content": "#def7ea",
          accent: "#563058",
          "accent-content": "#f8f5f1",
          neutral: "#f8f5f1",
          "neutral-content": "#222737",
          "base-0": "#ffffff",
          "base-100": "#f6f6f8",
          "base-200": "#DEDFE3",
          "base-300": "#C7C8CD",
          "base-400": "#AFB1B8",
          "base-500": "#989AA2",
          "base-600": "#80838D",
          "base-700": "#696C77",
          "base-800": "#515562",
          "base-900": "#3A3E4C",
          "base-1000": "#000000",
          "base-content": "#222737",
          info: "#563058",
          "info-content": "#f8f5f1",
          success: "#7eb672",
          "success-content": "#222737",
          warning: "#fba63a",
          "warning-content": "#222737",
          error: "#D93226",
          "error-content": "#222737",
        },
      },
      {
        ruminatedark: {
          primary: "#f7cbc0",
          "primary-content": "#790e4a",
          secondary: "#def7ea",
          "secondary-content": "#11639a",
          accent: "#f8f5f1",
          "accent-content": "#563058",
          neutral: "#222737",
          "neutral-content": "#f8f5f1",
          "base-0": "#000000",
          "base-100": "#80838D",
          "base-200": "#696C77",
          "base-300": "#515562",
          "base-400": "#3A3E4C",
          "base-500": "#989AA2",
          "base-600": "#f6f6f8",
          "base-700": "#DEDFE3",
          "base-800": "#C7C8CD",
          "base-900": "#AFB1B8",
          "base-1000": "#ffffff",
          "base-content": "#222737",
          info: "#563058",
          "info-content": "#f8f5f1",
          success: "#7eb672",
          "success-content": "#222737",
          warning: "#fba63a",
          "warning-content": "#222737",
          error: "#D93226",
          "error-content": "#222737",
        },
      },
    ],
  },
  //Button Themes
  theme: {
    extend: {
      spacing: {
        "t-spacing-0": "0px",
        "t-spacing-2": "8px",
        "t-spacing-3": "12px",
        "t-spacing-4": "16px",
        "t-spacing-5": "20px",
        "t-spacing-6": "24px",
        "t-spacing-8": "32px",
        "t-spacing-9": "36px",
        "t-spacing-11": "44px",
        "t-spacing-35": "14px",
      },
      borderRadius: {
        "u-borderRadius-rounded": "1000px",
      },
      colors: {
        "d-color-base-200": "#DEDFE3",
        "d-color-semantic-neutral-content": "#1F2739",
        "line-color": "#222737",
        "base-content": "var(--d-color-base-content, #1F2739)",
        "primary-text": "var(--d-color-semantic-primary-content, #FFC6BC)",
        "secondary-text": "var(--d-color-semantic-secondary-content, #DEF7EA)",
        "accent-text": "var(--d-color-semantic-accent-content, #E0D9E1)",
        "link-text": "var(--d-color-semantic-primary-bg, #790E4A)",
        default: "var(--d-color-base-200, #DEDFE3)", // Default color
        primary: "var(--d-color-semantic-primary-bg, #92004C)", // Primary color
        secondary: "var(--d-color-semantic-secondary-bg, #0067A4)", // Secondary color
        accent: "var(--d-color-semantic-accent-bg, #632B5C)", // Accent color
        neutral: "var(--d-color-semantic-neutral-bg, #FAF5F1)", // Neutral color
        ghost: "var(--d-sys-colors-empty, rgba(255, 255, 255, 0.00))", // Ghost color
        link: "var(--d-sys-colors-empty, rgba(255, 255, 255, 0.00))", // Link color
        success: "var(--d-color-status-success-bg, #4EBA60)", // Success color
        warning: "var(--d-color-status-warning-bg, #FF9B00)", // Warning color
        error: "var(--d-color-status-error-bg, #F00)", // Error color
      },
      boxShadow: {
        "custom-lg": "1px 2px 0px 0px #000, 1px 4px 0px 0px #000",
        "custom-lg-color":
          "1px 2px 0px 0px color(display-p3 0 0 0), 1px 4px 0px 0px color(display-p3 0 0 0)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
