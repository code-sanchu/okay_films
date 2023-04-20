<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Video from './Video.svelte';
	import { videos } from './videos';

	let transitionContentIn = false;

	onMount(() => {
		setTimeout(() => {
			transitionContentIn = true;
		}, 1000);
	});

	let transform: {
		status: 'opening' | 'open' | 'closing';
		videoId: string;
	} | null = null;

	type ImgTransformStatus = 'idle' | 'opening' | 'open' | 'closing';
	let transformStatus: ImgTransformStatus = 'idle';
</script>

<div class="flex w-screen overflow-x-hidden">
	<div class="w-[20vw] h-screen">
		<Header />
	</div>
	<div class="overflow-hidden grid place-items-center ">
		<main class="w-[80vw] relative inline-grid grid-cols-4 gap-12 py-12">
			{#if !transitionContentIn}
				<div class="absolute inset-0 z-30 bg-white" transition:fade={{ duration: 2200 }} />
			{/if}
			{#each videos as video, index}
				{#if transitionContentIn}
					<div
						in:fly={{
							y: 200,
							duration: 600,
							delay: Math.floor(index / 4) * 600 + (index % 4) * 200
						}}
					>
						{#if typeof video === 'number'}
							<div class="aspect-video" />
						{:else}
							<Video
								thumbImg={video.thumbImg}
								title={video.title}
								id={video.id}
								vimeoVideoId={video.vimeoVideoId}
								aspectRatio={video.aspectRatio}
								on:imgTransform={(e) => {
									transformStatus = e.detail.state;
								}}
							/>
						{/if}
					</div>
				{/if}
			{/each}
		</main>
	</div>
</div>
