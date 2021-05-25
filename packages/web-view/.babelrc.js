console.log('进来了');
module.exports = {
  targets: { node: 'current' },
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  env: {
    test: {
      plugins: ['transform-es2015-modules-commonjs'],
    },
  },
};
