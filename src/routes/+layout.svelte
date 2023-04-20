<script>
	import { fade } from 'svelte/transition';
	import '../app.css';

	export let data;
</script>

<svelte:head>
	<title>Hey Sam</title>
	<meta name="description" content="Okay Films." />
	<meta
		name="keywords"
		content="TV production, production company, UK production, London production"
	/>
	<link
		rel="preload"
		href="/fonts/Helvetica Neue Regular.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

{#key data.pathname}
	<body in:fade={{ delay: 300 }} out:fade>
		<slot />
	</body>
{/key}

<style>
	@font-face {
		font-family: 'Helvetica Neue';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/Helvetica Neue Regular.woff2');
	}

	body {
		font-family: 'Helvetica Neue', sans-serif;
	}
</style>
