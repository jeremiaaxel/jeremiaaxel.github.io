<script lang="ts">
  import ProjectCardComponent from './project-card.svelte';
  import type { Project, ProjectsByType } from '$lib/types/project';
  import { groupProjectsByType } from '$lib/utils/projects';

  export let data: Project[];
  export let priorities: string[] = ['fulltime', 'internship', 'school', 'personal'];

  // Get unique priorities
  const uniquePriorities = [...new Set(priorities)];
  // Sort projects by priority
  let sortedProjects: ProjectsByType;
  $: sortedProjects = groupProjectsByType(data);
</script>

<section id="projects">
  <h3 class="text-3xl">Projects</h3>
  <div class="flex flex-col space-y-2">
    {#each uniquePriorities as priority}
      <div class="project-type">
        {#if sortedProjects[priority]}
          <h3 class="text-xl capitalize">{priority}</h3>
          {#each sortedProjects[priority] as project}
            <div class="project-item flex flex-col my-2">
              <ProjectCardComponent data={project} />
            </div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</section>
