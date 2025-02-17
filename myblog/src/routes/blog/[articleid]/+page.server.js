import { CMS_API } from '$env/static/private';

// collections/ionutale/records?expand=tags

import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
	console.log('param', params);
  const url = `${CMS_API}/collections/ionutale/records/${params.articleid}?expand=tags`;
	const post = await fetch(url).then((r) => r.json());

	if (post) {
		return post;
	}

	error(404, 'Not found');
}
