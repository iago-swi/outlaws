import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { readFileSync } from 'node:fs';

// The version shown on the title screen comes from package.json: bump it there, and nowhere else.
const version = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')).version;

// The build produces ONE self-contained dist/index.html (scripts, styles and
// fonts inlined) so the game can be started by double-clicking the file.
export default defineConfig({
  base: './',
  plugins: [viteSingleFile()],
  assetsInclude: ['**/*.lhm'],          // the Blender models go into the page as base64, like the fonts
  define: { __APP_VERSION__: JSON.stringify(version) },
  build: { target: 'es2022', chunkSizeWarningLimit: 4000 },
});
