import type { Project } from '$lib/types/project';

export function sortProjectsByPriorities(data: Project[], priorities: string[]): Project[] {
    type ProjectsByType = {
        [key: string]: Project[]
    };

    const projectsByType: ProjectsByType = data.reduce((acc: ProjectsByType, project: Project) => {
        if (acc[project.type]) {
            acc[project.type].push(project);
        } else {
            acc = { ...acc, [project.type]: [project] };
        }
        return acc;
    }, {});
    const sortedProjects: Project[] = [];
    priorities.forEach(priority => {
        if (projectsByType[priority]) {
            console.log(...projectsByType[priority]);
            sortedProjects.push(...projectsByType[priority]);
        }
    });
    return sortedProjects;
}

export function extractTechStacks(projects: Project[]) {
    const techStacks = projects.map((project) => project.techStacks);
    const uniqueTechStacks = [...new Set(techStacks.flat())];
    return uniqueTechStacks;
}