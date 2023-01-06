/*eslint no-undef: "off"*/
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:playwright/playwright-test'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "@typescript-eslint/no-var-requires": "off"
  },
  env: {
    browser: true,
    es2021: true,
  },
  "ignorePatterns": [
    "**/config/*.js",
    "*.graphql",
    "tsconfig.json",
    "**/package.json",
    "**/package-lock.json",
    "**/out/*.json",
    "**/*.png",
    "**/*.xml",
    "**/*.html",
    "**/*.md"
  ],
}
