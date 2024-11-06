import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      all: true,
      include: ['src/**/*.ts?(x)'],
      exclude: [
        'src/main.tsx',
        'src/GlobalStyles.tsx',
        'src/**/*.test.ts?(x)',
        'src/reportWebVitals.ts',
      ],
      reporter: ['text', 'lcov'],
      thresholds: {
        statements: 40,
        branches: 40,
        functions: 40,
        lines: 40,
      },
      provider: 'v8',
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});
