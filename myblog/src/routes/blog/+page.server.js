import { CMS_API } from '$env/static/private';

// collections/ionutale/records?expand=tags

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const url = `${CMS_API}/collections/ionutale/records?expand=tags`;
	const posts = await fetch(url).then((r) => r.json());

	if (posts) {
		return posts;
	}

	error(404, 'Not found');
}
