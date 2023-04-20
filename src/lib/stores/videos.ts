import { writable } from 'svelte/store';

function createVideoStore() {
	const videos = [
		{
			id: crypto.randomUUID(),
			src: '/videos/stock_video-woods&sunrise-6s.mp4',
			title: 'video 5',
			num: 5
		},
		{
			id: crypto.randomUUID(),
			src: '/videos/stock_video-sea&lighthouse-8s.mp4',
			title: 'video 6',
			num: 6
		},
		{ id: crypto.randomUUID(), src: '/videos/stock_video-ink-14s.mp4', title: 'video 1', num: 1 },
		{
			id: crypto.randomUUID(),
			src: '/videos/stock_video-woods&sunrise-6s.mp4',
			title: 'video 2',
			num: 2
		},
		{
			id: crypto.randomUUID(),
			src: '/videos/stock_video-sea&lighthouse-8s.mp4',
			title: 'video 3',
			num: 3
		},
		{ id: crypto.randomUUID(), src: '/videos/stock_video-ink-14s.mp4', title: 'video 4', num: 4 }
	];

	const { subscribe, update } = writable({ videos, activeId: videos[2].id });

	return {
		subscribe,
		cycle: () => {
			update(($videos) => {
				const nextId = $videos.videos[3].id;
				const firstVideo = $videos.videos.shift() as typeof videos[0];

				const updated = { videos: [...$videos.videos, firstVideo], activeId: nextId };

				return updated;
			});
		}
	};
}

export const videoStore = createVideoStore();
