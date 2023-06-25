<script lang="ts">
	import type { Project } from '$lib/types/project';
	import type { Profile } from '$lib/types/profile';

	import dataJson from '$lib/data/data.json';
	
	import { extractTechStacks } from '$lib/utils/extractTechStacks';

	import ProjectsComponent from '../components/projects.svelte';
	import ProfileComponent from '../components/profile.svelte';
	import SkillsComponent from '../components/skills.svelte';

	let profile: Profile = dataJson.profile;
	let projects: Project[] = dataJson.projects;
	let dynamicSkills: string[] = extractTechStacks(projects);
</script>

<section class="flex flex-col md:container md:mx-80 my-20 md:px-5 space-y-5">
	<ProfileComponent data={profile} />
	<ProjectsComponent data={projects} />
	<SkillsComponent data={dynamicSkills} />
</section>
