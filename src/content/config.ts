import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        draft: z.boolean(),
        order: z.number(),
        name: z.string(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        techStack: z.object({
            frontend: z.array(z.string()).optional(),
            backend: z.array(z.string()).optional(),
            project: z.array(z.string()).optional(),
            extension: z.array(z.string()).optional(),
        }),
        links: z.object({
            website: z.string().optional(),
            extensionStore: z.string().optional(),
            frontend: z.string().optional(),
            backend: z.string().optional(),
            extension: z.string().optional(),
            project: z.string().optional(),
        }),
        link: z.string(),
        tag: z.array(z.string()),
        imageFolder: z.string(),
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
