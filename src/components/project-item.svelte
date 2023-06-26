<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { formatArrays } from '$lib/utils/formatting';

	export let data: Project;
</script>

<section class="project">
	<h1 class="text-xl font-medium">
		{data.name} 
		{#if data.organization}
			@ {data.organization}
		{/if}
	</h1>
	<p>{data.description}</p>
	<ol class="list-decimal list-inside flex flex-col">
		{#each data.tasks as task}
			<li class="">
				<p class="task-name inline font-medium">{task.name}</p>
				<p class="task-desc ps-5">{task.description}</p>
			</li>
		{/each}
	</ol>
	<div class="tech-stack">
		<div class="text-lg font-medium">Tech Stack(s):</div>
		<p>{formatArrays(data.techStacks)}</p>
	</div>
	<div class="tags">
		<div class="text-lg font-medium">Tag(s):</div>
		<p>{formatArrays(data.tags)}</p>
	</div>
</section>
