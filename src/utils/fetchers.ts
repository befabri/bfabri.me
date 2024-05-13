import { getCollection } from "astro:content";

export async function getProjects() {
    const projects = (await getCollection("project"))
        .filter(project => !project.data.draft)
    return projects;
}