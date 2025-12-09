import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
})

export const collections = {
  projects: projectCollection,
}
