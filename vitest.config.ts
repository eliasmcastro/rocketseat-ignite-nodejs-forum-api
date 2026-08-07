import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    root: './',
    globals: true,
  },
  plugins: [
    swc.vite({
      module: {
        type: 'es6',
      },
    }),
  ],
})
