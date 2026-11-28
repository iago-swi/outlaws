import { defineConfig } from 'vite';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default defineConfig({
  base: './',
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version)
  },
  plugins: [
    {
      name: 'inject-app-version',
      transformIndexHtml(html) {
        return html.replace(/%APP_VERSION%/g, pkg.version);
      }
    }
  ],
  server: {
    port: 5173,
    open: false
  },
  build: {
    target: 'es2020'
  }
});
