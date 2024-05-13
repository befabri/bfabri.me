import { getCollection } from "astro:content";

export async function getProjects() {
    const projects = (await getCollection("project"))
        .filter(project => !project.data.draft)
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

export async function getProjectsStaticPaths() {
    const projectEntries = await getCollection("project");
    return projectEntries.map((entry) => ({
        params: { slug: entry.slug },
        props: { entry },
    }));
}
