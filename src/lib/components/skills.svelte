<script lang="ts">
	import NotificationComponent from '../components/notification.svelte';
	import { Button } from '$lib/components/ui/button';

	export let data: string[];
	export let skillsClicked = {
		latestClick: -1,
		values: new Set<number>()
	};
	const notification = {
		title: '',
		detail: 'Click on the skills to filter the projects (OR filters)'
	};

	function updateSkillsClicked(skillIdx: number) {
		if (skillsClicked.values.has(skillIdx)) {
			skillsClicked.values.delete(skillIdx);
		} else {
			skillsClicked.values.add(skillIdx);
		}
		skillsClicked.latestClick = skillIdx;
	}
</script>

<section id="skills">
	<h3 class="text-2xl">Skills</h3>
	<NotificationComponent data={notification} type="banner" />
	<section class="flex gap-1 flex-wrap">
		{#each data as skill, skillIdx}
			<Button
				variant="outline"
				on:click={() => updateSkillsClicked(skillIdx)}
				class="rounded px-2 py-1 {skillsClicked.values.has(skillIdx) ? 'bg-gray-300' : ''}"
				>{skill}
			</Button>
		{/each}
	</section>
</section>
