import type { Project } from '$lib/types/project';

export function extractTechStacks(projects: Project[]) {
    const techStacks = projects.map((project) => project.techStacks);
    const uniqueTechStacks = [...new Set(techStacks.flat())];
    return uniqueTechStacks;
}
