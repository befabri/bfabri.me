import { defineCollection, type CollectionEntry, z } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/project" }),
    schema: z.object({
        draft: z.boolean(),
        order: z.number(),
        id: z.string(),
        name: z.string(),
        year: z.number(),
        description: z.string(),
        tldr: z.string().optional(),
        kind: z.string().optional(),
        role: z.string().optional(),
        keyFeatures: z.array(z.string()).optional(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
        links: z.object({
            website: z.string().optional(),
            project: z.string().optional(),
            items: z.array(
                z.object({
                    label: z.string(),
                    href: z.string(),
                })
            ).optional(),
        }),
        tag: z.array(
            z.object({
                name: z.string(),
                note: z.string().optional(),
            })
        ),
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
