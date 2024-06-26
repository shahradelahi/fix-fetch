import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  minify: true,
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  outDir: 'dist',
});
