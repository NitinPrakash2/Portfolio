import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress', threshold: 1024 }),
    viteCompression({ algorithm: 'gzip', threshold: 1024 }),
    visualizer({ open: false, filename: 'dist/stats.html' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    minify: 'esbuild',
    target: 'es2015',
    cssMinify: true,
    sourcemap: false,
    reportCompressedSize: false,
  },
});
