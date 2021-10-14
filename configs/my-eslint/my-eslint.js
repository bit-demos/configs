module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.mjs'],
      // extends: [require.resolve('eslint-config-airbnb')],
      rules: {
        'no-console': 'error'
      }
    }
  ]
};
