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
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
      provider: 'v8',
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
});
