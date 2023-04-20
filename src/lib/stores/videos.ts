import { writable } from 'svelte/store';

function createVideoStore() {
	const videos = [
		{ id: 'abc', src: '/videos/ink-67358.mp4', title: 'video 1', num: 1 },
		{ id: 'def', src: '/videos/lighthouse-1917.mp4', title: 'video 2', num: 2 },
		{ id: 'jkl', src: '/videos/ink-67358.mp4', title: 'video 3', num: 3 },
		{ id: 'ghi', src: '/videos/sunrise-83880.mp4', title: 'video 4', num: 4 },
		{ id: 'mno', src: '/videos/lighthouse-1917.mp4', title: 'video 5', num: 5 },
		{ id: 'pqr', src: '/videos/sunrise-83880.mp4', title: 'video 6', num: 6 }
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
