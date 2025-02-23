import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import perfectionist from 'eslint-plugin-perfectionist'
import reactPlugin from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['node_modules', 'dist', 'public', '*.config.{js,mjs,ts}'] },
  {
    files: ['**/*.{ts,tsx}'],
    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],
    languageOptions: {
      ecmaVersion: 2020,
      ...reactPlugin.configs.flat.recommended.languageOption,
      globals: { ...globals.browser, ...globals.serviceworker },
    },
    plugins: {
      'jsx-a11y': pluginJsxA11y,
      perfectionist,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      'perfectionist/sort-interfaces': [
        'error',
        {
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          newlinesBetween: 'never',
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['^@/(.*)$'],
          groups: [
            'react',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          customGroups: {
            value: {
              react: ['^react$', '^react-.+'],
            },
            type: {
              react: ['^react$', '^react-.+'],
            },
          },
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  prettierConfig
)
