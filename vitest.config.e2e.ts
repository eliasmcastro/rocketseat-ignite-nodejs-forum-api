import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    root: './',
    globals: true,
    setupFiles: ['./test/setup-e2e.ts'],
    include: ['**/*.e2e-spec.ts'],
  },
  plugins: [
    swc.vite({
      module: {
        type: 'es6',
      },
    }),
  ],
})
