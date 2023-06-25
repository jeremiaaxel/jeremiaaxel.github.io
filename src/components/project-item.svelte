<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { formatArrays } from '$lib/utils/formatting';

	export let data: Project;
</script>

<div class="project">
	<h1 class="text-xl">{data.name}</h1>
	<p>{data.description}</p>
	<ol class="list-decimal list-inside flex flex-col">
		{#each data.tasks as task}
			<li class="">
				<p class="task-name inline">{task.name}</p>
				<p class="task-desc ps-5">{task.description}</p>
			</li>
		{/each}
	</ol>
	<div class="tech-stack">
		<div class="text-lg">Tech Stack(s):</div>
		<p>{formatArrays(data.techStacks)}</p>
	</div>
	<div class="tags">
		<div class="text-lg">Tag(s):</div>
		<p>{formatArrays(data.tags)}</p>
	</div>
</div>
