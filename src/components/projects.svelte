<script lang="ts">
	import ProjectItemComponent from './project-item.svelte';
	import type { Project } from '$lib/types/project';
	import { groupProjectsByType } from '$lib/utils/projects';

	export let data: Project[];
	export let priorities: string[] = ['internship', 'school', 'personal'];

	const uniquePriorities = [...new Set(priorities)];
	const sortedProjects = groupProjectsByType(data);
</script>

<section id="projects">
	<h3 class="text-3xl">Projects</h3>
	<div class="flex flex-col space-y-4">
		{#each uniquePriorities as priority}
			<div class="project-type">
				{#if sortedProjects[priority]}
					<h3 class="text-xl capitalize">{priority}</h3>
					<div class="project-item flex flex-col space-y-2">
						{#each sortedProjects[priority] as project}
							<ProjectItemComponent data={project} />
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>
