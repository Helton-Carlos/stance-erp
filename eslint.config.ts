module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'node/prefer-global/process': ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /** PERFECTIONIST */
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'components',
          'mocks',
          'assets',
          'icons',
          'side-effect',
          [
            'style',
            'side-effect-style',
          ],
          'enums',
          [
            'parent-type',
            'sibling-type',
            'index-type',
            'type',
            'internal-type',
            'types',
          ],
        ],
        customGroups: {
          value: {
            assets: [
              '~/assets/**',
            ],
            components: [
              '~/components/**/*.vue',
            ],
            enums: [
              '~/types/**',
            ],
            icons: [
              '~icons/**',
            ],
            mocks: [
              '~/mocks/**',
            ],
            types: [
              '~/components/**/types',
            ],
          },
        },
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'alphabetical',
        groupKind: 'values-first',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'alphabetical',
        groupKind: 'values-first',
      },
    ],
    
    /** STYLE */
    'style/arrow-parens': [
      'error',
      'always',
    ],

    /** TYPESCRIPT */
    'ts/no-unused-vars': ['error'],

    /** VUE */
    'vue/block-order': [
      'error',
      {
        order: [
          'script',
          'template',
          'style',
        ],
      },
    ],
    'vue/padding-line-between-tags': [
      'error',
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
      },
    ],

    /** DISABLED */
    'antfu/if-newline': 'off',
    'ts/consistent-type-definitions': 'off',
    'vue/valid-v-slot': 'off',
  }
}