import js from "@eslint/js";
import nextConfig from "eslint-config-next";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    ignores: [".next", "dist", "node_modules", "eslint.config.mjs"],
  },
  js.configs.recommended,
  ...nextConfig,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        React: "readonly",
      },
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "simple-import-sort": simpleImportSort,
      prettier: prettierPlugin,
    },

    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "consistent-return": "off",
      "no-shadow": "off",
      "arrow-body-style": "off",
      "prefer-template": "off",
      "no-param-reassign": "warn",
      "no-unused-vars": "off",
      "no-undef": "warn",
      "no-console": "warn",
      "no-debugger": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": false,
        },
      ],

      "prettier/prettier": "error",
    },
  },

  prettierConfig,
];
