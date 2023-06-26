<script lang="ts">
	import type { Technologies } from '$lib/types/technologies';

	export let data: Technologies[];
</script>

<section class="skills-description">
	<h3 class="text-2xl">Technologies</h3>
	<div class="flex flex-col space-y-3">
		{#each data as skill}
			<div class="flex flex-col space-x-2">
				<h3 class="text-lg font-medium capitalize">{skill.name}</h3>
				<p>{skill.description}</p>
			</div>
		{/each}
	</div>
</section>
