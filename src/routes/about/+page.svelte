<script>
	import Header from '$lib/components/header/Header.svelte';
</script>

<div class="flex min-h-screen ">
	<div class="w-[20vw] h-screen">
		<Header />
	</div>
	<div class="pt-[10vh] w-[80vw] grid place-items-center pb-24">
		<div class="flex gap-4">
			<img
				src={`/images/video-thumbnails/ink.png`}
				loading="eager"
				class="aspect-video w-[28vw] object-cover overflow-hidden"
				alt=""
			/>
			<img
				src={`/images/video-thumbnails/lighthouse.png`}
				class="aspect-video w-[28vw] object-cover overflow-hidden"
				alt=""
			/>
		</div>
		<div class="text-lg mt-16">
			<h2 class="font-bold">We do stuff</h2>
			<p class="leading-relaxed max-w-[677px] mt-6 flex flex-col gap-4">
				<span>
					Donec sit amet ornare ipsum. Quisque elementum malesuada vehicula. Etiam posuere id nunc
					sed vehicula. Curabitur sem dolor, tincidunt et sodales id, aliquam at odio. Sed
					consectetur, enim at tempor dictum, augue diam fermentum mauris, eu tincidunt risus nisi
					non mi. Donec vestibulum in lectus eget suscipit. Nulla nibh massa, ullamcorper vitae
					ligula efficitur, varius convallis massa.;
				</span>
				<span>
					If you've got a brief to share, a question about what's possible, or you just want a
					coffee and a chat, why not say Hey?
				</span>
			</p>
			<h2 class="font-bold mt-16">Services</h2>
			<p class="leading-relaxed max-w-[677px] mt-2">
				Donec faucibus massa sapien, eu cursus sapien rutrum rhoncus. Aenean viverra tellus a
				lacinia vestibulum. Sed risus ipsum, sodales at libero non, consequat elementum massa. Sed
				fermentum nisi nec turpis sollicitudin, at molestie enim mollis. Vivamus vel turpis ligula.
				Donec rutrum urna eget varius venenatis. Sed sodales euismod orci, ut volutpat nisl sodales
				sit amet. Donec consequat tellus quis condimentum consectetur. Donec tincidunt venenatis
				eros, non pellentesque dolor dignissim et. In consequat commodo fringilla. Morbi lobortis
				purus et leo dignissim euismod. Morbi at sodales justo. Nulla vulputate lacus ut turpis
				tempor, vitae dictum mauris tincidunt.
			</p>
			<h2 class="font-bold mt-16">Our Clients</h2>
			<div class="inline-grid grid-cols-2 mt-8 gap-32">
				<div class="flex flex-col gap-2">
					<p>Russel - Renner</p>
					<p>Hickle LLC</p>
					<p>Kautzer Inc</p>
					<p>Mraz and Sons</p>
				</div>
				<div class="flex flex-col gap-2">
					<p>Dibbert - Hoppe</p>
					<p>Quitzon Group</p>
					<p>Trantow, Pagac and Gottlieb</p>
					<p>Rolfson, Wunsch and Parisian</p>
				</div>
			</div>
		</div>
	</div>
</div>
