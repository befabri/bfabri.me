import { z, defineCollection, type CollectionEntry } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        draft: z.boolean(),
        order: z.number(),
        id: z.string(),
        name: z.string(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        links: z.object({
            website: z.string().optional(),
            project: z.string().optional(),
        }),
        tag: z.array(z.string()),
        images: z.array(
            z.object({
                src: z.string(),
                alt: z.string(),
            })
        ),
    }),
});

export const collections = {
    project: projectCollection,
};

export type Project = CollectionEntry<"project">;
