<script lang="ts">
  import type { Project } from '$lib/types/project';
  import { formatArrays } from '$lib/utils/formatting';

  export let data: Project;
  export let id: string;
</script>

<section {id} class="project bg-neutral-100 p-5 rounded-md">
  <p>{data.description}</p>
  <ol class="list-decimal list-inside flex flex-col">
    {#each data.tasks as task}
      <li class="">
        <p class="task-name inline font-medium">{task.name}</p>
        <p class="task-desc ps-5">{task.description}</p>
      </li>
    {/each}
  </ol>
  <div class="tech-stack">
    <div class="text-lg font-medium">Tech Stack(s):</div>
    <p>
      {formatArrays(data.techStacks.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())))}
    </p>
  </div>
  <div class="tags">
    <div class="text-lg font-medium">Tag(s):</div>
    <p class="capitalize">{formatArrays(data.tags)}</p>
  </div>
</section>
