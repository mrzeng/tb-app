module.exports = {
  extends: '../../.eslintrc.js', // 注意这里的不同
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
