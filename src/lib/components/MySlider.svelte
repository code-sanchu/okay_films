<script lang="ts">
	import { Slider } from 'radix-svelte';

	export let value: number[];
</script>

<form>
	<Slider.Root
		class="relative flex h-3 w-[120px]
		cursor-pointer touch-none select-none items-center 
		data-[orientation=vertical]:h-[120px] 
		data-[orientation=vertical]:w-3 
		data-[orientation=vertical]:flex-col"
		bind:value
		dir="ltr"
		disabled={false}
		inverted={false}
		min={0}
		max={100}
		orientation="vertical"
		step={1}
		aria-label="Volume"
	>
		<Slider.Track
			class="relative grow rounded-full bg-gray-200
					data-[orientation=horizontal]:h-[2px] 
					data-[orientation=vertical]:w-[2px]"
		>
			<Slider.Range
				class="absolute rounded-full bg-gray-300
				data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
			/>
		</Slider.Track>
		<Slider.Thumb
			class="block h-3 w-3 cursor-pointer rounded-[10px] border-2 border-gray-400 bg-white transition-colors duration-75 ease-in-out hover:bg-gray-200 focus:outline-none"
		/>
	</Slider.Root>
</form>
