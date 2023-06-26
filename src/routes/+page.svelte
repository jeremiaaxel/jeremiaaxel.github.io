<script lang="ts">
	import type { Project } from '$lib/types/project';
	import type { Profile } from '$lib/types/profile';

	import dataJson from '$lib/data/data.json';

	import { extractTechStacks } from '$lib/utils/projects';

	import ProjectsComponent from '../components/projects.svelte';
	import ProfileComponent from '../components/profile.svelte';
	import SkillsComponent from '../components/skills.svelte';
	import SkillsDescription from '../components/skills-description.svelte';

	let profile: Profile = dataJson.profile;
	let projects: Project[] = dataJson.projects;
	let dynamicSkills: string[] = extractTechStacks(projects);
	let skillsDescription = dataJson.skillsDescription;
	const priorities = ['internship', 'school', 'personal'];
</script>

<section
	class="flex flex-col my-20 space-y-5
		   md:container xl:mx-80 lg:mx-40 sm:mx-20 md:px-5"
>
	<ProfileComponent data={profile} />
	<ProjectsComponent data={projects} priorities={priorities} />
	<SkillsComponent data={dynamicSkills} />
	<SkillsDescription data={skillsDescription} />
</section>
