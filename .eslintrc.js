module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    env: {
      browser: true,
      node: true,
      "cypress/globals": true,
    },
    plugins: ['cypress'],
    settings: {
        react: {
          version: 'detect',
        },
      },
  };