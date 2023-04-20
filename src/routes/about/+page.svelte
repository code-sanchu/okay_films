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
				src={`/images/video-thumbnails/cancer_research-stand_up_to_cancer-2016.avif`}
				loading="eager"
				class="aspect-video w-[28vw] object-cover overflow-hidden"
				alt=""
			/>
			<img
				src={`/images/video-thumbnails/Puma - Suede Music - Ghetts.avif`}
				class="aspect-video w-[28vw] object-cover overflow-hidden"
				alt=""
			/>
		</div>
		<div class="text-lg mt-12">
			<h2 class="font-bold">In House Production from the Outside</h2>
			<p class="leading-relaxed max-w-[677px] mt-6 flex flex-col gap-4">
				<span>
					We're on a mission to make production easier for agencies and brands by providing.<br
					/>More collaboration, less confusion. We'll work with you to find the right approach for
					your production needs.
				</span>
				<span>
					If you've got a brief to share, a question about what's possible, or you just want a
					coffee and a chat, why not say Hey?
				</span>
			</p>
			<h2 class="font-bold mt-16">Services</h2>
			<h3 class="mt-8 italic">Full services</h3>
			<p class="leading-relaxed max-w-[677px] mt-2">
				Creative development. Pre-production. Shoot management. Post production , online and
				delivery. We do it all - feel free to reach out at any stage of the process, although we
				love to jump in at the start where we can.
			</p>
			<h3 class="mt-8 italic">Production Support</h3>
			<p class="leading-relaxed max-w-[677px] mt-2">
				We'll send one of our producers to join your existing team. Freelance, but with a flexible
				approach to fit your budget and timeline.
			</p>
			<h3 class="mt-8 italic">Service Company</h3>
			<p class="leading-relaxed max-w-[677px] mt-2">
				Need a shoot in the UK or Europe? Tap into our network of producers, locations, kit and crew
				for a seamless and stress free experience.
			</p>
			<h2 class="font-bold mt-16">Our Clients</h2>
			<div class="inline-grid grid-cols-2 mt-8 gap-32">
				<div class="flex flex-col gap-2">
					<p>Cancer Research UK</p>
					<p>Nando&apos;s</p>
					<p>Battersea Dogs & Cats Home</p>
					<p>Confused.com</p>
				</div>
				<div class="flex flex-col gap-2">
					<p>Iceland</p>
					<p>The Teenage Cancer Trust</p>
					<p>Panasonic</p>
					<p>Puma</p>
				</div>
			</div>
		</div>
	</div>
</div>
