<script lang="ts">
	import type { Project } from '$lib/types/project';
	import type { Profile } from '$lib/types/profile';

	import dataJson from '$lib/data/data.json';
	import profileJson from '$lib/data/profile.json';
	import sidebarJson from '$lib/data/sidebar.json';

	import { extractTechStacks } from '$lib/utils/projects';
	import { extractTechnologies } from '$lib/utils/technologies';

	import ProjectsComponent from '../components/projects.svelte';
	import ProfileComponent from '../components/profile.svelte';
	import SkillsComponent from '../components/skills.svelte';
	import TechnologiesComponent from '../components/technologies.svelte';
	// import NotificationComponent from '../components/notification.svelte';
	// import Sidebar from '../components/sidebar.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';

	const projectPriorities = ['fulltime', 'internship', 'volunteering', 'school', 'personal'];

	const profile: Profile = profileJson;
	const { projects, technologies } = dataJson;
	const { items: sidebarItems, brand } = sidebarJson;

	const skillsFromProjects: string[] = extractTechStacks(projects as Project[]);
	const skillsFromTechnologies: string[] = extractTechnologies(technologies);
	const skills = [...new Set(skillsFromProjects.concat(skillsFromTechnologies))].sort();

	const notification = {
		title: 'Work In Progress',
		detail: 'This website is still under development. But the contents are ready.'
	};

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

	function scrollHandler(event: Event) {
		const target = event.target as HTMLElement;
		const scrollHeight = target.scrollHeight;
		const scrollTop = target.scrollTop;
		const clientHeight = target.clientHeight;
		const scrollBottom = scrollHeight - scrollTop - clientHeight;

		if (scrollBottom < 1) {
			console.log('bottom');
		}
	}

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Jeremia Axel's Portofolio Web</title>
</svelte:head>

<section
	class="flex flex-auto flex-col my-5 space-y-4
		   md:container mx-auto
		   md:w-3/5 w-11/12
		   px-10 py-5 rounded-lg"
	on:scroll={scrollHandler}
>
	<!-- <NotificationComponent data={notification} /> -->
	<!-- <Sidebar brand={brand} data={sidebarItems} /> -->
	{#if ready}
		<div transition:fade={{ duration: 500, easing: linear }}>
			<ProfileComponent data={profile} />
		</div>

		<div transition:fly={{ delay: 400, duration: 700, easing: linear, y: 100, opacity: 0 }}>
			<SkillsComponent data={skills} bind:skillsClicked />
			<ProjectsComponent data={projects} priorities={projectPriorities} bind:skillsFilter />
			<TechnologiesComponent data={technologies} />
		</div>
	{/if}
</section>
