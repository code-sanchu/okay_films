<script lang="ts">
	import { myCrossfade } from '$lib/helpers/transition';
	import { circIn, quintOut } from 'svelte/easing';
	import { fade, slide, fly } from 'svelte/transition';
	import { Vimeo } from 'sveltekit-embed';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	type ImgTransformStatus = 'idle' | 'opening' | 'open' | 'closing';

	export let id: string;
	export let thumbImg: string;
	export let title: string;
	export let vimeoVideoId: string;
	export let aspectRatio: string = '16/9';

	const [sendImg, receiveImg] = myCrossfade({
		duration: 1200,
		easing: quintOut,
		delay: 0
	});

	let key = id;
	let imgTransformStatus: ImgTransformStatus = 'idle';

	let topSectionHeight: number = 0;
	let bottomSectionHeight: number = 0;

	let windowHeight: number;

	let untransformedHover = false;
</script>

<svelte:window bind:innerHeight={windowHeight} />

{#if untransformedHover}
	<div
		class="fixed z-40 left-[60vw] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
		in:fly={{ delay: 200, y: 200, duration: 800, easing: quintOut }}
		out:fly={{ y: -100, duration: 600, easing: quintOut }}
	>
		<h2 class="text-7xl w-full font-bold">{title}</h2>
	</div>
{/if}

{#if imgTransformStatus === 'idle' || imgTransformStatus === 'closing'}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="cursor-pointer"
		on:click={() => {
			imgTransformStatus = 'opening';
			dispatch('imgTransform', { state: 'opening' });
			setTimeout(() => {
				imgTransformStatus = 'open';
				dispatch('imgTransform', { state: 'open' });
			}, 1200);
		}}
		on:mouseenter={() => (untransformedHover = true)}
		on:mouseleave={() => (untransformedHover = false)}
	>
		<div
			class="aspect-video relative bg-black flex flex-col justify-center"
			in:receiveImg={{ key }}
			out:sendImg={{ key }}
		>
			<img
				class={`absolute object-cover transition-all ease-in-out duration-300 ${
					untransformedHover ? 'grayscale' : ''
				}`}
				src={`/images/video-thumbnails${thumbImg}`}
				loading="lazy"
				style="aspect-ratio: {aspectRatio};"
				alt=""
			/>
		</div>
	</div>
{:else}
	<div
		class="fixed flex flex-col left-0 top-0 z-50 h-screen w-screen overflow-hidden bg-white"
		transition:fade
	>
		<div class="grid grid-cols-3 gap-8 p-4 shrink-0" bind:clientHeight={topSectionHeight}>
			<div />
			<div />
			<div>
				<button
					class="uppercase text-brand tracking-wide text-xs font-bold"
					on:click={() => {
						if (imgTransformStatus !== 'open') {
							return;
						}

						imgTransformStatus = 'closing';
						dispatch('imgTransform', { state: 'closing' });

						setTimeout(() => {
							imgTransformStatus = 'idle';
							dispatch('imgTransform', { state: 'idle' });
						}, 1200);
					}}
				>
					Close
				</button>
			</div>
		</div>
		<div class="grid place-items-center">
			<div
				class={`relative bg-black w-full aspect-video`}
				style="max-height: {windowHeight - topSectionHeight - bottomSectionHeight}px;"
				in:receiveImg={{ key }}
				out:sendImg={{ key }}
			>
				{#if imgTransformStatus === 'opening'}
					<img
						class={`z-20 absolute w-full h-full object-contain`}
						style="aspect-ratio: {aspectRatio};"
						src={`/images/video-thumbnails${thumbImg}`}
						loading="lazy"
						alt=""
						out:fade={{ delay: 300, duration: 600 }}
					/>
				{:else}
					<div class="z-20 absolute w-full h-full">
						<Vimeo vimeoId={vimeoVideoId} />
					</div>
				{/if}
			</div>
		</div>
		<div class="p-4 shrink-0" bind:clientHeight={bottomSectionHeight}>
			<h2 class="text-2xl text-gray-600">{title}</h2>
		</div>
	</div>
{/if}
