import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: '/pnpm-vite-typescript/', //om urlen är https://github.com/jenmwa/pnpm-vite-typescript
  define: {
    'process.env': {},
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@import "./src/scss/_variables.scss";',
  //     },
  //   },
  // },
});
