import { getCollection } from "astro:content";
import { ui } from "@i18n/ui";
import { getLangFromSlug } from "@i18n/utils";
import type { Project } from "content/config";

interface AdjacentProjects {
    nextProject: Project;
    previousProject: Project;
}

export async function getProjects(lang: keyof typeof ui): Promise<Project[]> {
    const projects = await getCollection("project");
    return projects
        .filter((project) => !project.data.draft && getLangFromSlug(project.slug) === lang)
        .sort((a, b) => a.data.order - b.data.order);
}

export function getAdjacentProjects(projects: Project[], currentProjectId: string): AdjacentProjects {
    const currentIndex = projects.findIndex((project: { id: string }) => project.id === currentProjectId);
    const nextProject = projects[currentIndex + 1] || projects[0];
    const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
    return { nextProject, previousProject };
}
