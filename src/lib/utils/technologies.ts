import type { Technologies } from '$lib/types/technologies';

export function extractTechnologies(technologies: Technologies[]) {
	return technologies.map((technology) => technology.name);
}
