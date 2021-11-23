module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: ['**/*.js'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 160, ignoreUrls: true, comments: 200 }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': [
      'off',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['vm'], // Allow `const vm= this`; `[]` by default
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    'prefer-const': 'off',
    'no-use-before-define': ['off', { variables: false }],
    'no-constant-condition': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-empty-function': 'warn',
    'no-undefined': 'off',
    'vue/no-unused-components': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/ban-types': 'off',
    'prefer-rest-params': 'off',
    'no-irregular-whitespace': 'off',
    'vue/multi-word-component-names': 'off',
    'multi-word-component-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'getter-return': 'off',
    'no-undef': 'off',
    'no-empty': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-mutating-props': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
