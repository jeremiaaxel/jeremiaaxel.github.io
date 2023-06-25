<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { formatArrays } from '$lib/utils/formatting';

	export let data: Project;
</script>

<div class="project">
	<h1 class="text-xl">{data.name}</h1>
	<p>{data.description}</p>
	<p>{formatArrays(data.techStacks)}</p>
	<p>{formatArrays(data.tags)}</p>
</div>
