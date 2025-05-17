// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      strict: false,
    },
    watch: {
      usePolling: true,
    },
    proxy: {
      '/users': 'http://localhost:5000',
      '/products': 'http://localhost:5000',
      '/categories': 'http://localhost:5000',
    },
    middlewareMode: false,
    
  },
});

