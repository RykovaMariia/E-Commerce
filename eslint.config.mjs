// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default withNuxt({
  plugins: {
    prettier: eslintPluginPrettier,
  },
  files: ['**/*.ts', '**/*.vue', '**/*.js'],
  ignores: ['node_modules', 'dist', 'public', '**/*.md'],
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/html-self-closing': ['error'],
  },
})
