<script lang="ts">
	import type { Project } from '$lib/types/project';
	import type { Profile } from '$lib/types/profile';

	import dataJson from '$lib/data/data.json';

	import { extractTechStacks } from '$lib/utils/projects';
	import { extractTechnologies } from '$lib/utils/technologies';

	import ProjectsComponent from '../components/projects.svelte';
	import ProfileComponent from '../components/profile.svelte';
	import SkillsComponent from '../components/skills.svelte';
	import TechnologiesComponent from '../components/technologies.svelte';
	import NotificationComponent from '../components/notification.svelte';

	const profile: Profile = dataJson.profile;

	const priorities = ['internship', 'school', 'personal'];
	const projects: Project[] = dataJson.projects;

	const technologies = dataJson.technologies;

	const skillsFromProjects: string[] = extractTechStacks(projects);
	const skillsFromTechnologies: string[] = extractTechnologies(technologies);
	const skills = [...new Set(skillsFromProjects.concat(skillsFromTechnologies))];

	const notification = {
		title: 'Work In Progress',
		detail: 'This website is still under development. But the content is ready.'
	};
</script>

<section
	class="flex flex-col my-20 space-y-4
		   md:container mx-auto
		   md:w-3/5 w-full"
>
	<NotificationComponent data={notification} />
	<ProfileComponent data={profile} />
	<ProjectsComponent data={projects} {priorities} />
	<SkillsComponent data={skills} />
	<TechnologiesComponent data={technologies} />
</section>
