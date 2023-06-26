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
	<div class="flex flex-col space-y-3">
		{#each uniquePriorities as priority}
			{#if sortedProjects[priority]}
				<h3 class="text-2xl capitalize">{priority}</h3>
				{#each sortedProjects[priority] as project}
					<ProjectItemComponent data={project} />
				{/each}
			{/if}
		{/each}
	</div>
</section>
