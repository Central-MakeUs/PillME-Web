import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react() as any, tsConfigPaths()],
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      include: ['**/*.test.+(ts|tsx|js)', '**/*.spec.+(ts|tsx|js)'],
      exclude: ['**/*.js', '**/*.mjs', '**/*.cjs'],
      reporter: ['text', 'json-summary'],
      reportsDirectory: './coverage/',
    },
    environment: 'happy-dom',
    setupFiles: ['./src/utils/test/setupTests.ts'],
    include: ['**/*.test.+(ts|tsx|js)', '**/*.spec.+(ts|tsx|js)'],
    reporters: ['default', 'json', 'github-actions'],
    outputFile: 'testResults.json',
    poolOptions: {
      threads: {
        singleThread: true,
      },
      forks: {
        singleFork: true,
      },
    },
    maxConcurrency: 1,
  },
});
