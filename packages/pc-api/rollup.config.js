import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';

const target = 'lib';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js'],
      }),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true, tsconfig: './tsconfig.prod.json' }),
      cleaner({
        targets: ['lib/', 'types/'],
      }),
    ],
  },
];
