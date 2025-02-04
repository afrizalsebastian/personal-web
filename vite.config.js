import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@data': '/src/data',
    },
  },
});
