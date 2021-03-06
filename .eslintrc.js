module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
  ],

  parserOptions: {
    ecmaVersion: 2020,
  },

  rules: {
    'indent': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'no-debugger': 'off',
    'space-before-function-paren': 'off',
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error'
        ]
      }
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        projectName: 'app',
        schemaJsonFilepath: 'node_modules/.temp/graphql/schema.json'
      }
    ]
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  plugins: [
    'graphql'
  ]
}
