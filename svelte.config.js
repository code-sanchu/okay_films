import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// needed for tailwind. I think for TS as well.
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
