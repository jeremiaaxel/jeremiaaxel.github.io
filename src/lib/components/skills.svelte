<script lang="ts">
  import NotificationComponent from '../components/notification.svelte';
  import { Info } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { toast } from 'svelte-sonner';

  export let data: string[];
  export let skillsClicked = {
    latestClick: -1,
    values: new Set<number>(),
  };
  const notification = {
    icon: Info,
    title: '',
    detail: 'Click on the skills to filter the projects (OR filters)',
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
  <section>
    <NotificationComponent data={notification} />
    <section class="flex gap-1 flex-wrap my-2">
      {#each data as skill, skillIdx}
        <Button
          variant="outline"
          on:click={() => {
            updateSkillsClicked(skillIdx);
            toast(
              `${skillsClicked.values.has(skillIdx) ? 'Added' : 'Removed'} "${skill}" skill filter`,
            );
          }}
          class="rounded px-2 py-1 {skillsClicked.values.has(skillIdx)
            ? 'bg-gray-300 dark:bg-gray-700'
            : ''}"
          data-umami-event="Skills Filter"
          data-umami-event-skill={`${skill}-${
            !skillsClicked.values.has(skillIdx) ? 'added' : 'removed'
          }`}
        >
          <!-- Tracker: if skill previously not exist, added, else removed -->
          {skill}
        </Button>
      {/each}
    </section>
  </section>
</section>
