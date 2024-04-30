import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  // build: {
  //   outDir: 'build',
  //   base: '/caolangilroy.com/',
  //   assetsDir: 'assets'
  //   // rollupOptions: {
  //   //   output: {
  //   //     assetFileNames: 'assets/[name][extname]',
  //   //   },
  //   // }
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      }
    }
  }
});
