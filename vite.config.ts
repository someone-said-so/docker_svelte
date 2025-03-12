import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';

export default defineConfig(() => {
	const plugins: PluginOption[] = [
		sveltekit(),
	]
	const server = {
		https: {
			key: './certs/localhost.key',
            cert: './certs/localhost.crt'
          }
	}
	return {
		server,
		plugins,
	}
});