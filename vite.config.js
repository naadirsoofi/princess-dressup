import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/princess-dressup/',
  plugins: [react()],
  server: {
    port: 5532,
    strictPort: true,
  },
  preview: {
    port: 5532,
    strictPort: true,
  },
});
