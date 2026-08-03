import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fick-hausmeisterservice/',
  server: {
    port: 3005,
    host: true
  },
  preview: {
    port: 3005,
    host: true
  }
});
