// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul', // or 'v8'
      exclude: [...configDefaults.exclude, '.eslintrc.cjs', 'src/main.tsx'],
    },
    exclude: [...configDefaults.exclude, 'src/main.tsx'],
  },
});
