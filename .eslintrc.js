module.exports = {
  root: true,
  extends: ['@tongtian/eslint-config-base-preset'],
  globals: {
    my: true,
  },
  rules: {
    'import/no-absolute-path': ['off', 'never'],
    'import/extensions': ['off', 'never'],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 'off',
  },
};
