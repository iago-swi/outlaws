import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// The build produces ONE self-contained dist/index.html (scripts, styles and
// fonts inlined) so the game can be started by double-clicking the file.
export default defineConfig({
  base: './',
  plugins: [viteSingleFile()],
  build: { target: 'es2022', chunkSizeWarningLimit: 4000 },
});
