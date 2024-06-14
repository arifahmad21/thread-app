module.exports = {
  root: true,
  env: { browser: true, es2020: true},
  globals : { cypress: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'cypress'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    'linebreak-style': 'off',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': 'off',
    'react/no-unescaped-entities' : 'off',
    'no-undef': 'off',
    'no-unused-vars' : 'off',
    'import/no-extraneous-dependencies' : 'off',
    'max-len': 'off',

  },
}
