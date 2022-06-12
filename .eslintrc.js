module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['tsx', 'jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
