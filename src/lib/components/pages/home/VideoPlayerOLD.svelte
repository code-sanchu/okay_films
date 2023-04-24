<script lang="ts">
	import MySlider from '$lib/components/MySlider.svelte';
	import MuteIcon from '$lib/components/icons/MuteIcon.svelte';
	import NextIcon from '$lib/components/icons/NextIcon.svelte';
	import PauseIcon from '$lib/components/icons/PauseIcon.svelte';
	import PlayIcon from '$lib/components/icons/PlayIcon.svelte';
	import VolumeIcon from '$lib/components/icons/VolumeIcon.svelte';
	import { videoStore } from '$lib/stores/videos';
	import { fade } from 'svelte/transition';

	export let src: string;
	export let title: string;
	export let num: number;
	export let pageReady: boolean;
	export let isActive: boolean;
	export let onLoadedData: () => void;
	export let hasBeenUnmuted: boolean;
	export let muted: boolean;
	export let sliderVolume: number[];

	const totalVids = $videoStore.videos.length;

	let time = 0;
	let duration = 0;

	$: totalSecsLeft = Math.round(duration - time);
	$: minsLeft = Math.floor(totalSecsLeft / 60);
	$: secsLeft = totalSecsLeft % 60;

	$: volume = sliderVolume[0] / 100;

	let paused = true;

	$: {
		if (isActive) {
			setTimeout(() => {
				paused = false;
			}, 700);
		}
	}

	$: {
		if (hasBeenUnmuted) {
			muted = false;
		}
	}

	let volHovered = false;

	function goNext() {
		time = 0;
		paused = true;
		videoStore.cycle();
	}
</script>

<svelte:body
	on:keydown={(e) => {
		if (!isActive) {
			return;
		}
		if (e.key == ' ' || e.code == 'Space') {
			paused = !paused;
		}
	}}
/>

<!-- svelte-ignore a11y-media-has-caption -->
<video
	class={`absolute bottom-0 right-0 h-full w-full overflow-hidden object-cover ${
		!pageReady ? 'opacity-0' : 'opacity-100'
	} delay-600 transition-opacity duration-1000 ease-in-out`}
	on:loadeddata={() => {
		if (!isActive) {
			return;
		}

		onLoadedData();
	}}
	bind:currentTime={time}
	bind:duration
	bind:paused
	on:ended={() => {
		goNext();
	}}
	bind:muted
	bind:volume
	on:click={() => {
		if (!isActive) {
			return;
		}
		if (!hasBeenUnmuted) {
			hasBeenUnmuted = true;
		} else {
			paused = !paused;
		}
	}}
>
	<source {src} type="video/mp4" />
</video>

<div
	class={`absolute bottom-0 flex w-full translate-y-full gap-12 pl-2 pt-1 text-sm uppercase text-gray-500 ${
		isActive ? 'opacity-100' : 'hidden opacity-0'
	}`}
>
	{#if !pageReady}
		<div class="absolute z-50 h-full w-full bg-white" transition:fade={{ duration: 1000 }} />
	{:else}
		<div class="flex w-full items-center justify-between pr-4">
			<div class="flex items-center gap-12" transition:fade={{ duration: 1000 }}>
				<div>{num}/{totalVids}</div>
				<div>{minsLeft < 10 ? '0' : ''}{minsLeft}:{secsLeft < 10 ? '0' : ''}{secsLeft}</div>
				<div>{title}</div>
			</div>
			<div class="flex items-center gap-8 text-gray-400" on:mouseleave={() => (volHovered = false)}>
				<button on:click={() => (paused = !paused)} type="button">
					{#if !paused}
						<PauseIcon />
					{:else}
						<PlayIcon />
					{/if}
				</button>
				<button on:click={() => goNext()} type="button">
					<NextIcon />
				</button>
				<div class="relative grid place-items-center" on:mouseenter={() => (volHovered = true)}>
					<button
						on:click={() => {
							if (muted && volume === 0) {
								sliderVolume = [40];
							}
							if (!hasBeenUnmuted) {
								hasBeenUnmuted = true;
							}
							muted = !muted;
						}}
						type="button"
					>
						{#if muted || volume === 0}
							<MuteIcon />
						{:else}
							<VolumeIcon />
						{/if}
					</button>
					{#if volHovered}
						<div
							class="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2"
							transition:fade
						>
							<MySlider bind:value={sliderVolume} />
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
