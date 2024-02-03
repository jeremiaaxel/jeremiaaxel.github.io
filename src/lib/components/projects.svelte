<script lang="ts">
	import ProjectCardComponent from './project-card.svelte';
	import type { Project } from '$lib/types/project';
	import { containsSkills, groupProjectsByType } from '$lib/utils/projects';

	export let data: Project[];
	export let priorities: string[] = ['fulltime', 'internship', 'school', 'personal'];
	export let skillsFilter: Set<string> = new Set<string>();

	// Get unique priorities
	const uniquePriorities = [...new Set(priorities)];
	let filteredProjects: Project[];
	// Get projects that match the skills filter (if any)
	$: filteredProjects =
		skillsFilter.size == 0
			? data
			: data.filter((project) => containsSkills(project, [...skillsFilter]));
	// Sort projects by priority
	const sortedProjects = groupProjectsByType(data);
</script>

<section id="projects">
	<h3 class="text-3xl">Projects</h3>
	<div class="flex flex-col space-y-2">
		{#each uniquePriorities as priority}
			<div class="project-type">
				{#if sortedProjects[priority]}
					<h3 class="text-xl capitalize">{priority}</h3>
					{#each sortedProjects[priority] as project}
						<div
							class="project-item flex flex-col my-2"
							class:hidden={!filteredProjects.includes(project)}
						>
							<ProjectCardComponent data={project} />
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
</section>
