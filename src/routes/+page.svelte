<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import MySpinner from '$lib/components/MySpinner.svelte';
	import VideoPlayer from '$lib/components/pages/home/VideoPlayer.svelte';
	import { myCrossfade } from '$lib/helpers/transition';
	import { videoStore } from '$lib/stores/videos';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let firstVideoReady = false;

	$: videos = $videoStore.videos.slice(0, 5);

	const [sendVideo, receiveVideo] = myCrossfade({
		duration: 2000,
		easing: quintOut
	});

	let hasBeenUnmuted = false;
	let muted = true;
	let sliderVolume = [40];

	let topSectionHeight: number | undefined;
	let bottomSectionHeight: number | undefined;
</script>

<div class="md:hidden fixed z-50 inset-0 grid place-items-center p-4">
	<div class="text-xl tracking-wide">
		This site is a prototype. <br /> Please view on a device larger than 768px in width.
	</div>
</div>

{#if !firstVideoReady}
	<div
		class="fixed z-30 left-0 top-0 w-full h-full hidden md:grid place-items-center bg-white"
		transition:fade
	>
		<MySpinner />
	</div>
{/if}

<div class="hidden md:flex h-screen w-screen overflow-hidden ">
	<div class="w-[20vw] h-screen">
		<Header />
	</div>
	<div class="flex flex-col w-[80vw] h-screen">
		<div class="flex-grow bg-black" bind:clientHeight={topSectionHeight} />
		<div class="flex">
			<div class="relative aspect-video w-[60vw]">
				{#each videos as video, index (video.id)}
					<div
						class={`${
							index === 0
								? `absolute left-0 top-0 z-20 -translate-x-[200%] -translate-y-[200%]  grayscale`
								: index === 1
								? `absolute left-0 top-0 z-20 -translate-x-full -translate-y-full grayscale`
								: index === 2
								? 'absolute z-20 w-full'
								: index === 3
								? 'absolute bottom-0 right-0 z-20 translate-x-full translate-y-full grayscale'
								: 'absolute bottom-0 right-0 z-20 translate-x-[200%] translate-y-[200%] grayscale'
						}`}
						style="height: {topSectionHeight && (index === 0 || index === 1)
							? `${topSectionHeight}px`
							: bottomSectionHeight && (index === 3 || index === 4)
							? `${bottomSectionHeight}px`
							: '100%'};
						width: {index !== 2 ? `20vw` : '100%'};"
						in:receiveVideo={{ key: video.id }}
						out:sendVideo={{ key: video.id }}
						animate:flip={{ duration: !firstVideoReady ? 0 : 2000 }}
					>
						{#if !firstVideoReady}
							<div
								class="absolute z-40 h-full w-full bg-white"
								transition:fade={{ duration: 1000 }}
							/>
						{/if}
						<VideoPlayer
							onLoadedData={() => {
								if (index !== 2) {
									return;
								}
								firstVideoReady = true;
							}}
							src={video.src}
							isActive={$videoStore.activeId === video.id}
							title={video.title}
							num={video.num}
							pageReady={firstVideoReady}
							bind:hasBeenUnmuted
							bind:muted
							bind:sliderVolume
						/>
					</div>
				{/each}
				{#if !hasBeenUnmuted}
					<div
						class="z-20 text-white uppercase text-xs absolute bottom-2 left-1/2 -translate-x-1/2"
						transition:fade
					>
						Click to unmute
					</div>
				{/if}
			</div>
			<div class="bg-black flex-grow" />
		</div>
		<div class="flex-grow" bind:clientHeight={bottomSectionHeight} />
	</div>
</div>
