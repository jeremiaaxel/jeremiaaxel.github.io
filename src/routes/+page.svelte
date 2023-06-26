<script lang="ts">
	import type { Project } from '$lib/types/project';
	import type { Profile } from '$lib/types/profile';

	import dataJson from '$lib/data/data.json';

	import { extractTechStacks } from '$lib/utils/projects';

	import ProjectsComponent from '../components/projects.svelte';
	import ProfileComponent from '../components/profile.svelte';
	import SkillsComponent from '../components/skills.svelte';
	import SkillsDescriptionComponent from '../components/skills-description.svelte';
	import NotificationComponent from '../components/notification.svelte';

	let profile: Profile = dataJson.profile;

	const priorities = ['internship', 'school', 'personal'];
	let projects: Project[] = dataJson.projects;

	let dynamicSkills: string[] = extractTechStacks(projects);
	let skillsDescription = dataJson.skillsDescription;

	const notification = {
		title: 'Work In Progress',
		detail: 'This website is still under development. But the content is ready.',
	};
</script>

<section
	class="flex flex-col my-20 space-y-5
		   md:container mx-auto
		   md:w-3/5 w-full"
>
	<NotificationComponent data={notification} />
	<ProfileComponent data={profile} />
	<ProjectsComponent data={projects} priorities={priorities} />
	<SkillsComponent data={dynamicSkills} />
	<SkillsDescriptionComponent data={skillsDescription} />
</section>
