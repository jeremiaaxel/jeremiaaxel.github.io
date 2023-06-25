<script lang="ts">
	import ProjectItemComponent from './project-item.svelte';
	import type { Project } from '$lib/types/project';

	export let data: Project[];
</script>

<section id="projects">
	<h3 class="text-2xl">Projects</h3>
	{#each data as project}
		<ProjectItemComponent data={project} />
	{/each}
</section>
