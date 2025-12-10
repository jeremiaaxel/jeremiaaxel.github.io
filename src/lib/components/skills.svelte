<script lang="ts">
  import NotificationComponent from '../components/notification.svelte';
  import { Info } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { toast } from 'svelte-sonner';

  export let data: string[];
  export let skillsClicked = {
    latestClick: '',
    values: new Set<string>(),
  };
  const notification = {
    icon: Info,
    title: '',
    detail: 'Click on the skills to filter the projects (OR filters)',
  };

  function updateSkillsClicked(skill: string) {
    if (skillsClicked.values.has(skill)) {
      skillsClicked.values.delete(skill);
    } else {
      skillsClicked.values.add(skill);
    }
    skillsClicked.values = skillsClicked.values; // Trigger reactivity
    skillsClicked.latestClick = skill;
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
            updateSkillsClicked(skill);
            toast(
              `${skillsClicked.values.has(skill) ? 'Added' : 'Removed'} "${skill}" skill filter`,
            );
          }}
          class="rounded px-2 py-1 {skillsClicked.values.has(skill)
            ? 'bg-gray-300 dark:bg-neutral-800'
            : ''}"
        >
          <!-- Tracker: if skill previously not exist, added, else removed -->
          {skill}
        </Button>
      {/each}
    </section>
  </section>
</section>
