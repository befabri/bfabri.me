import { getCollection } from "astro:content";
import { ui } from "@i18n/ui";
import { getLangFromSlug } from "@i18n/utils";

export async function getProjects(lang: keyof typeof ui) {
    const projects = (await getCollection("project")).filter(
        (project) => !project.data.draft && getLangFromSlug(project.slug) === lang
    );
    return projects;
}

export async function getProjectsSorted() {
    const projectEntries = await getCollection("project");
    const projects = projectEntries.map((entry) => ({
        id: entry.id,
        link: entry.data.link,
        order: entry.data.order,
    }));
    const sortedProjects = projects.sort((a, b) => a.order - b.order);
    return sortedProjects;
}
