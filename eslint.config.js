import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "dist",
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      ".prettierrc.js",
    ], // Ignore the 'dist' directory and config files
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin, // Enable TypeScript plugin
      react: pluginReact, // Enable React plugin
    },
    rules: {
      // React-specific rules
      "react/jsx-uses-react": "off", // Disable (not needed with React 17+)
      "react/react-in-jsx-scope": "off", // Disable (not needed with React 17+)
      "react/jsx-key": "error", // Warn about missing keys in lists
      "react/jsx-no-useless-fragment": "error", // Warn about useless fragments
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ], // Enforce consistent JSX curly braces
      "react/self-closing-comp": "error", // Enforce self-closing components
      "react/no-unescaped-entities": "error", // Warn about unescaped entities in JSX
      "react/no-array-index-key": "warn", // Warn about using array index as key

      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused function arguments prefixed with _
      "@typescript-eslint/no-explicit-any": "warn", // Warn about using `any`
      "@typescript-eslint/ban-ts-comment": "warn", // Warn about using `@ts-ignore`
      "@typescript-eslint/no-non-null-assertion": "warn", // Warn about non-null assertions
      "@typescript-eslint/consistent-type-imports": "error", // Enforce consistent type imports
      "@typescript-eslint/no-floating-promises": "error", // Ensure promises are handled
      "@typescript-eslint/no-misused-promises": "error", // Warn about misused promises
      "@typescript-eslint/no-unnecessary-type-assertion": "error", // Warn about unnecessary type assertions
      "@typescript-eslint/no-empty-object-type": "error", // Disallow certain types
      "@typescript-eslint/no-unsafe-function-type": "error", // Disallow certain types
      "@typescript-eslint/no-wrapper-object-types": "error", // Disallow certain types
      "@typescript-eslint/no-namespace": "warn", // Warn about using namespaces
      "@typescript-eslint/consistent-type-imports": "warn", // Warn about inconsistent type imports
      "@typescript-eslint/no-empty-object-type": "warn", // Warn about empty object types

      // General best practices
      "no-console": "warn", // Warn about console.log
      "no-var": "error", // Disallow `var`
      "prefer-const": "error", // Prefer `const` over `let`
      eqeqeq: "error", // Require `===` and `!==`
      "no-implicit-coercion": "error", // Disallow implicit type coercion
      "no-empty-pattern": "warn", // Warn about empty destructuring patterns

      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs["jsx-runtime"].rules,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];
