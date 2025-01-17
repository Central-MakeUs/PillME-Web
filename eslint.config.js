import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jestDom from 'eslint-plugin-jest-dom';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'storybook-static', 'pnpm-lock.yaml'] },
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-compiler': reactCompiler,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser },
    },
    rules: {
      eqeqeq: 'error',
      curly: ['warn', 'multi-line', 'consistent'],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'import/no-unresolved': ['error', { commonjs: true, amd: true }],
      'import/named': 'off',
      'import/namespace': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-duplicates': 'error',
      'import/extensions': ['error', 'ignorePackages'],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          'newlines-between': 'never',
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react-compiler/react-compiler': 'warn',
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    files: [
      'tests/**/*.{ts,tsx}',
      '__mocks__/**.ts',
      'src/**/*.spec.ts',
      'src/**/*.spec.tsx',
    ],
    ...testingLibrary.configs['flat/react'],
    ...jestDom.configs['flat/recommended'],
    ...vitest.configs.recommended,
    rules: {
      'import/extensions': ['error', 'never'],
      '@typescript-eslint/no-unused-vars': 'off',
      'testing-library/no-node-access': 'off',
      'vitest/expect-expect': 'off',
      'vitest/consistent-test-it': [
        'error',
        { fn: 'it', withinDescribe: 'it' },
      ],
    },
    languageOptions: {
      globals: {
        globalThis: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
        vi: true,
      },
    },
  },
  {
    files: ['*.js'],
    ignores: ['dist', 'storybook-static'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
