#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// Paths to token files
const LIGHT_TOKENS_PATH = resolve(__dirname, "../tokens/Light.json");
const DARK_TOKENS_PATH = resolve(__dirname, "../tokens/Dark.json");
const OUTPUT_PATH = resolve(__dirname, "../../tailwind-tokens-preset.js");

/**
 * Read and parse a JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Object} Parsed JSON data
 */
function readJsonFile(filePath) {
  try {
    const data = readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    process.exit(1);
  }
}

/**
 * Flatten a nested object into a single-level object with dot notation
 * @param {Object} obj - The object to flatten
 * @param {string} prefix - The prefix for the flattened keys
 * @returns {Object} Flattened object
 */
function flattenObject(obj, prefix = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key]) &&
      !obj[key].value
    ) {
      Object.assign(acc, flattenObject(obj[key], prefixedKey));
    } else {
      acc[prefixedKey] = obj[key];
    }

    return acc;
  }, {});
}

/**
 * Extract color tokens from flattened tokens
 * @param {Object} flatTokens - Flattened token object
 * @returns {Object} Extracted color tokens
 */
function extractColors(tokens) {
  const colors = {};

  // Check if the tokens object has a light/dark structure
  const themeKey = tokens.light ? "light" : tokens.dark ? "dark" : null;

  if (!themeKey || !tokens[themeKey].colors) {
    console.warn("No colors found in tokens structure");
    return colors;
  }

  // Extract colors from the nested structure
  const colorData = tokens[themeKey].colors;

  // Process each color category (primary, secondary, etc.)
  Object.entries(colorData).forEach(([category, values]) => {
    if (typeof values === "object") {
      if (values.bg && values.bg.value) {
        colors[`${category}-bg`] = values.bg.value;
      }
      if (values.content && values.content.value) {
        colors[`${category}-content`] = values.content.value;
      }

      // Handle base colors which have a different structure
      if (category === "base") {
        Object.entries(values).forEach(([shade, shadeValue]) => {
          if (typeof shadeValue === "object" && shadeValue.value) {
            colors[`base-${shade}`] = shadeValue.value;
          }
        });
      }
    }
  });

  return colors;
}

/**
 * Extract typography tokens
 * @param {Object} flatTokens - Flattened token object
 * @returns {Object} Extracted typography tokens
 */
function extractTypography(flatTokens) {
  const typography = {
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
    letterSpacing: {},
  };

  Object.entries(flatTokens).forEach(([key, value]) => {
    if (value && typeof value === "object" && value.value) {
      if (key.includes("fontFamily")) {
        const name = key.split(".").pop();
        typography.fontFamily[name] = value.value;
      } else if (key.includes("fontSize")) {
        const name = key.split(".").pop();
        typography.fontSize[name] = value.value;
      } else if (key.includes("fontWeight")) {
        const name = key.split(".").pop();
        typography.fontWeight[name] = value.value;
      } else if (key.includes("lineHeight")) {
        const name = key.split(".").pop();
        typography.lineHeight[name] = value.value;
      } else if (key.includes("letterSpacing")) {
        const name = key.split(".").pop();
        typography.letterSpacing[name] = value.value;
      }
    }
  });

  return typography;
}

/**
 * Extract border radius tokens
 * @param {Object} flatTokens - Flattened token object
 * @returns {Object} Extracted border radius tokens
 */
function extractBorderRadius(flatTokens) {
  const borderRadius = {};

  Object.entries(flatTokens).forEach(([key, value]) => {
    if (
      (key.includes("borderRadius") || key.includes("radius")) &&
      value &&
      typeof value === "object" &&
      value.value
    ) {
      const name = key.split(".").pop();
      borderRadius[name] = value.value;
    }
  });

  return borderRadius;
}

/**
 * Extract shadow tokens
 * @param {Object} flatTokens - Flattened token object
 * @returns {Object} Extracted shadow tokens
 */
function extractShadows(flatTokens) {
  const shadows = {};

  Object.entries(flatTokens).forEach(([key, value]) => {
    if (
      key.includes("shadow") &&
      value &&
      typeof value === "object" &&
      value.value
    ) {
      const name = key.split(".").pop();
      shadows[name] = value.value;
    }
  });

  return shadows;
}

/**
 * Create a Tailwind preset object from token data
 * @param {Object} lightTokens - Light theme tokens
 * @param {Object} darkTokens - Dark theme tokens
 * @returns {Object} Tailwind preset configuration
 */
function createTailwindPreset(lightTokens, darkTokens) {
  // Extract colors directly from the structured tokens (not flattened)
  const lightColors = extractColors(lightTokens);
  const darkColors = extractColors(darkTokens);

  // For other token types, continue using the flattened approach
  const flatDarkTokens = flattenObject(darkTokens);
  const typography = extractTypography(flatDarkTokens);
  const borderRadius = extractBorderRadius(flatDarkTokens);
  const shadows = extractShadows(flatDarkTokens);

  // Create a color palette that includes both light and dark variants
  const colorPalette = {};

  // Process each light color
  Object.entries(lightColors).forEach(([key, value]) => {
    if (!colorPalette[key]) {
      colorPalette[key] = value;
    }
  });

  // Construct Tailwind darkMode config
  const darkModeColors = {};
  Object.entries(darkColors).forEach(([key, value]) => {
    darkModeColors[key] = value;
  });

  return {
    theme: {
      extend: {
        colors: colorPalette,
        borderRadius,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontWeight: typography.fontWeight,
        lineHeight: typography.lineHeight,
        letterSpacing: typography.letterSpacing,
        boxShadow: shadows,
      },
    },
    plugins: [
      // Plugin to handle dark mode colors
      function ({ addBase }) {
        addBase({
          // Add CSS variables for light mode
          ":root": Object.entries(lightColors).reduce((acc, [key, value]) => {
            acc[`--color-${key}`] = value;
            return acc;
          }, {}),

          // Add CSS variables for dark mode
          ".dark": Object.entries(darkColors).reduce((acc, [key, value]) => {
            acc[`--color-${key}`] = value;
            return acc;
          }, {}),
        });
      },
      // Add a plugin that sets up dark mode colors using a 'dark' variant
      function ({ addVariant, e }) {
        addVariant("dark", ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.dark .${e(`dark${separator}${className}`)}`;
          });
        });
      },
    ],
  };
}

/**
 * Main function to convert tokens to Tailwind preset
 */
function main() {
  console.log("Reading token files...");
  const lightTokens = readJsonFile(LIGHT_TOKENS_PATH);
  const darkTokens = readJsonFile(DARK_TOKENS_PATH);

  console.log("Extracting colors from light theme...");
  const lightColors = extractColors(lightTokens);
  console.log(`Found ${Object.keys(lightColors).length} colors in light theme`);

  console.log("Extracting colors from dark theme...");
  const darkColors = extractColors(darkTokens);
  console.log(`Found ${Object.keys(darkColors).length} colors in dark theme`);

  console.log("Creating Tailwind preset...");
  const tailwindPreset = createTailwindPreset(lightTokens, darkTokens);

  console.log("Writing Tailwind preset to file...");
  const outputContent = `
/** 
* Tailwind CSS preset generated from Token Studio tokens
* Generated on: ${new Date().toISOString()}
*/
module.exports = ${JSON.stringify(tailwindPreset, null, 2)};
`;

  writeFileSync(OUTPUT_PATH, outputContent, "utf8");
  console.log(`Tailwind preset written to ${OUTPUT_PATH}`);
}

// Run the main function
main();
