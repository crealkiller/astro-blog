import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		date: z.string(),
		excerpt: z.string(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = {
	'blog': blogCollection,
};
