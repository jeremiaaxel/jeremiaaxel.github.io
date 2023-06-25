<script lang="ts">
	import ProjectItemComponent from './project-item.svelte';
	import type { Project } from '$lib/types/project';
	import { sortProjectsByPriorities } from '$lib/utils/projects';

	export let data: Project[];
	export let priorities: string[] = ['internship', 'school', 'personal'];
	
	let uniquePriorities = [...new Set(priorities)];
	let sortedProjects = sortProjectsByPriorities(data, uniquePriorities);
</script>

<section id="projects">
	<h3 class="text-2xl">Projects</h3>
	<div class="flex flex-col space-y-3">
		{#each sortedProjects as project}
			<ProjectItemComponent data={project} />
		{/each}
	</div>
</section>
