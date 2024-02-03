<script lang="ts">
	import type { Project } from '$lib/types/project';
	import type { Profile } from '$lib/types/profile';

	import dataJson from '$lib/data/data.json';
	import profileJson from '$lib/data/profile';

	import { containsSkills, extractTechStacks } from '$lib/utils/projects';
	import { extractTechnologies } from '$lib/utils/technologies';

	import ProjectsComponent from '$lib/components/projects.svelte';
	import ProfileComponent from '$lib/components/profile.svelte';
	import SkillsComponent from '$lib/components/skills.svelte';
	import NavbarComponent from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';

	const projectPriorities = [
		'fulltime',
		'freelance',
		'personal',
		'internship',
		'volunteering',
		'school'
	];

	const profile: Profile = profileJson;
	const { projects, technologies } = dataJson;

	const skillsFromProjects: string[] = extractTechStacks(projects as Project[]);
	const skillsFromTechnologies: string[] = extractTechnologies(technologies);
	const skills = [...new Set(skillsFromProjects.concat(skillsFromTechnologies))].sort();

	let skillsClicked = {
		latestClick: 0,
		values: new Set<number>()
	};

	let skillsFilter = new Set<string>();

	function changedSkillsClicked(latestClick: number, values: Set<number>) {
		let report = '';
		values.forEach((num) => (report += skills[num] + '|'));
		report = report.trim();
		skillsFilter = new Set<string>(report.split('|').filter((skillStr) => skillStr != ''));
	}

	$: changedSkillsClicked(skillsClicked.latestClick, skillsClicked.values);

	let filteredProjects: Project[];
	// Get projects that match the skills filter (if any)
	$: filteredProjects =
		skillsFilter.size == 0
			? projects
			: projects.filter((project) => containsSkills(project, [...skillsFilter]));

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Jeremia Axel's Portofolio Web</title>
	<meta
		content="Jeremia Axel's Portofolio Web to show projects and/or experiences."
		name="description"
	/>
	<link href="" rel="icon" />
</svelte:head>

<section
>
	<NavbarComponent />
	<section
		class="flex flex-auto flex-col my-5 space-y-4
		   md:container mx-auto
		   px-10 py-5 rounded-lg"
	>
		{#if ready}
			<div transition:fade={{ duration: 500, easing: linear }}>
				<ProfileComponent data={profile} />
			</div>

			<div
				transition:fly={{ delay: 400, duration: 700, easing: linear, y: 100, opacity: 0 }}
				class="flex flex-col md:flex-row-reverse gap-5"
			>
				<section id="sidebar" class="md:w-3/12 md:sticky md:top-6 h-fit">
					<SkillsComponent data={skills} bind:skillsClicked />
				</section>
				<section id="main-content" class="md:w-9/12">
					<ProjectsComponent bind:data={filteredProjects} priorities={projectPriorities} />
				</section>
			</div>
		{/if}
	</section>
</section>
