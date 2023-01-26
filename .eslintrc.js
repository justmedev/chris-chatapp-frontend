module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@vue/eslint-config-airbnb',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['node_modules/**'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
    'space-before-function-paren': 'off',
    // 'max-len': ['error', 200],
    'lines-between-class-members': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'linebreak-style': 'off',
    // '@typescript-eslint/no-shadow': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-button-has-type': 'off',
    'vue/multi-word-component-names': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vue/require-default-prop': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
      moduleDirectory: ['src', 'node_modules'],
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.vue'],
      },
    },
  },
};
