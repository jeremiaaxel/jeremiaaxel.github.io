<script lang="ts">
	// import ProjectDetailModal from './project-detail-modal.svelte';
	import Modal from './modal/modal.svelte';
	import ProjectCardComponent from './project-card.svelte';
	import type { Project } from '$lib/types/project';
	import { containsSkills, groupProjectsByType } from '$lib/utils/projects';
	import ProjectDetail from './project-detail.svelte';

	export let data: Project[];
	export let priorities: string[] = ['internship', 'school', 'personal'];
	export let skillsFilter: Set<string> = new Set<string>();

	const uniquePriorities = [...new Set(priorities)];
	let filteredProjects: Project[];
	$: filteredProjects =
		skillsFilter.size == 0
			? data
			: data.filter((project) => containsSkills(project, [...skillsFilter]));
	const sortedProjects = groupProjectsByType(data);

	let selectedProject: Project;
	let isModalOpen = false;
	function openModal(project: Project) {
		isModalOpen = true;
		selectedProject = project;
	}
	let selectedProjectTitle = '';
	$: {
		if (selectedProject) {
			selectedProjectTitle = `${selectedProject.name} ${
				selectedProject.organization ? '@ ' + selectedProject.organization : ''
			}`;
		}
	}
</script>

<section id="projects">
	{#if selectedProject}
		<Modal id="project-detail-modal" title={selectedProjectTitle} bind:isOpen={isModalOpen}>
			<section slot="body">
				<ProjectDetail data={selectedProject} id="project-detail" />
			</section>
		</Modal>
	{/if}

	<h3 class="text-3xl">Projects</h3>
	<div class="flex flex-col space-y-2">
		{#each uniquePriorities as priority}
			<div class="project-type">
				{#if sortedProjects[priority]}
					<h3 class="text-xl capitalize">{priority}</h3>
					{#each sortedProjects[priority] as project}
						<div
							class="project-item flex flex-col my-2"
							class:hidden={!filteredProjects.includes(project)}
						>
							<ProjectCardComponent data={project} onClick={() => openModal(project)} />
						</div>
					{/each}
				{/if}
			</div>
		{/each}
	</div>
</section>
