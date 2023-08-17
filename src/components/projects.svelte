<script lang="ts">
	import ProjectItemComponent from './project-item.svelte';
	import type { Project } from '$lib/types/project';
	import { containsSkills, groupProjectsByType } from '$lib/utils/projects';

	export let data: Project[];
	export let priorities: string[] = ['internship', 'school', 'personal'];
	export let skillsFilter: Set<string> = new Set<string>();

	const uniquePriorities = [...new Set(priorities)];
	let filteredProjects: Project[];
	$: filteredProjects =
		skillsFilter.size == 0
			? data
			: data.filter((project) => containsSkills(project, [...skillsFilter]));
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
							<ProjectItemComponent data={project} />
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
</section>
