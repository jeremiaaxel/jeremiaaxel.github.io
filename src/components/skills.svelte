<script lang="ts">
	export let data: string[];
</script>

<section id="skills">
	<h3 class="text-2xl">Skills</h3>
	{#each data as skill}
		<span class="mx-2">{skill}</span>
	{/each}
</section>
