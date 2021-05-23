import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';

const target = 'lib';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: `${target}/index.js`,
      format: 'es',
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js'],
      }),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      cleaner({
        targets: [`${target}/`],
      }),
    ],
  },
];
