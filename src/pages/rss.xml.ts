import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get() {
	let posts = await getCollection('posts')

	posts.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))

	posts = posts.slice(0, 3)

	return rss({
		title: 'yovanenovore: Narración Visual sobre mi yo',
		description: 'VisVrs es un tema Astro diseñado específicamente para blogs de fotos y texto, lo que lo hace ideal para autores de blogs y creadores de contenido.',
		site: 'https://yovanenovore.tech',
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `${post.slug}/`
		})),
		customData: `<language>en</language>`
	})
}
