// basic .eslintrc.js compatible with react and typescript
module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Disable prop-types as we use TypeScript for type checking
    "react/prop-types": "off",
  },
  settings: { react: { version: "detect" } },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      // Specifies the ESLint parser for TypeScript
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "react"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
      env: {
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          moduleDirectory: ["node_modules", "src/"],
        },
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
        project: [
          "./packages/{eslint-config}/tsconfig.json",
          "./tsconfig.json",
        ],
      },
      rules: {
        // Disable prop-types as we use TypeScript for type checking
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        // interface start with capital I
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/prefer-regexp-exec": "off",
        // allow "any" as type
        "@typescript-eslint/no-explicit-any": "off",
        // allow ts-comments for testing purposes
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-floating-promises": [
          "error",
          { ignoreVoid: true },
        ],
      },
    },
  ],
};
