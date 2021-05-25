import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'es',
    },
    external: ['@tb-app/pub-sub', '@tb-app/pub-sub'],
    plugins: [
      typescript({ useTsconfigDeclarationDir: true, tsconfig: './tsconfig.prod.json' }),
      cleaner({
        targets: ['lib/', 'types/'],
      }),
    ],
  },
];
