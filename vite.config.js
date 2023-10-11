import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: process.env.NODE_ENV === 'production' ? '/skillometer/' : '/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		outDir: './dist/',
		cssCodeSplit: false,
		rollupOptions: {
			output: {
				entryFileNames: 'assets/skillometer--bundle.js',
				assetFileNames: 'assets/[name].[ext]',
			},
		},
	},
});
