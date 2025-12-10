import type { Project, ProjectsByType } from '$lib/types/project';

export function groupProjectsByType(data: Project[]): ProjectsByType {
  const projectsByType: ProjectsByType = data.reduce((acc: ProjectsByType, project: Project) => {
    if (acc[project.type]) {
      acc[project.type].push(project);
    } else {
      acc = { ...acc, [project.type]: [project] };
    }
    return acc;
  }, {});

  return projectsByType;
}

export function sortProjectsByPriorities(data: Project[], priorities: string[]): Project[] {
  const projectsByType: ProjectsByType = groupProjectsByType(data);
  const sortedProjects: Project[] = [];
  priorities.forEach((priority) => {
    if (projectsByType[priority]) {
      sortedProjects.push(...projectsByType[priority]);
    }
  });
  return sortedProjects;
}

export function extractTechStacks(projects: Project[]) {
  const techStacks = projects.map((project) => project.techStacks);
  const tags = projects.map((project) => project.tags);
  const uniqueSkills = [...new Set([...techStacks.flat(), ...tags.flat()])];
  return uniqueSkills;
}

export function containsSkills(project: Project, skills: string[]): boolean {
  return (
    project.techStacks.filter((value) => skills.includes(value)).length > 0 ||
    project.tags.filter((value) => skills.includes(value)).length > 0
  );
}
