<script lang="ts">
  import type { Project } from '$lib/types/project';
  import type { Profile } from '$lib/types/profile';

  import dataJson from '$lib/data/data.json';
  import profileJson from '$lib/data/profile';

  /* eslint-disable @typescript-eslint/no-unused-vars */
  import { containsSkills, extractTechStacks } from '$lib/utils/projects';
  /* eslint-enable @typescript-eslint/no-unused-vars */
  import { extractTechnologies } from '$lib/utils/technologies';
  import { toast } from 'svelte-sonner';

  import ProjectsComponent from '$lib/components/projects.svelte';
  import ProfileComponent from '$lib/components/profile.svelte';
  import SkillsComponent from '$lib/components/skills.svelte';
  import NavbarComponent from '$lib/components/navbar.svelte';
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { linear } from 'svelte/easing';

  import { MoveDown } from 'lucide-svelte';

  const projectPriorities = [
    'fulltime',
    'freelance',
    'personal',
    'internship',
    'volunteering',
    'school',
  ];

  const profile: Profile = profileJson;
  const { projects, technologies } = dataJson;

  const skillsFromProjects: string[] = extractTechStacks(projects as Project[]);
  const skillsFromTechnologies: string[] = extractTechnologies(technologies);
  const skills = [...new Set(skillsFromProjects.concat(skillsFromTechnologies))].sort();

  let skillsClicked = {
    latestClick: '',
    values: new Set<string>(),
  };

  function toggleSkill(skill: string) {
    if (skillsClicked.values.has(skill)) {
      skillsClicked.values.delete(skill);
      toast(`Removed "${skill}" filter`);
    } else {
      skillsClicked.values.add(skill);
      toast(`Added "${skill}" filter`);
    }
    skillsClicked.values = skillsClicked.values;
    skillsClicked.latestClick = skill;
  }

  let filteredProjects: Project[];
  // Get projects that match the skills filter (if any)
  $: filteredProjects =
    skillsClicked.values.size == 0
      ? projects
      : projects.filter((project) => containsSkills(project, [...skillsClicked.values]));

  let ready = false;
  onMount(() => {
    ready = true;

    const { hash } = document.location;
    const scrollTo = hash && document.getElementById(hash.slice(1));
    if (scrollTo)
      setTimeout(() => {
        scrollTo.scrollIntoView({
          behavior: 'smooth',
        });
      }, 200);
  });

  function scrollIntoView({ target }: { target: EventTarget | null }) {
    const hrefTarget = (target as HTMLAnchorElement).getAttribute('href');
    if (!hrefTarget) return;

    const el = document.querySelector(hrefTarget);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
</script>

<svelte:head>
  <title>Jeremia Axel's Portofolio Web</title>
  <meta
    content="Jeremia Axel's Portofolio Web to show projects and/or experiences."
    name="description"
  />
  <link href="" rel="icon" />
</svelte:head>

<section class="dark:bg-black scroll-smooth">
  <NavbarComponent />
  <section
    class="flex flex-auto flex-col my-5 space-y-4
		   md:container mx-auto
		   px-10 py-5 rounded-lg"
  >
    {#if ready}
      <div
        transition:fade={{ duration: 500, easing: linear }}
        class="h-[calc(92dvh-40px)] flex flex-col justify-center items-center relative"
      >
        <ProfileComponent data={profile} />
        <div class="flex justify-center items-center absolute bottom-0">
          <a
            class="bg-gray-200 dark:bg-neutral-800 rounded-full p-3 animate-bounce"
            href="#main-content"
            on:click|preventDefault={scrollIntoView}
          >
            <MoveDown />
          </a>
        </div>
      </div>

      <div
        transition:fly={{ delay: 400, duration: 700, easing: linear, y: 100, opacity: 0 }}
        class="flex flex-col md:flex-row-reverse gap-5"
      >
        <section id="sidebar"
class="md:w-3/12 md:sticky md:top-6 h-fit">
          <SkillsComponent data={skills} bind:skillsClicked />
        </section>
        <section id="main-content" class="md:w-9/12">
          <ProjectsComponent
            bind:data={filteredProjects}
            priorities={projectPriorities}
            {toggleSkill}
            activeSkills={skillsClicked.values}
          />
        </section>
      </div>
    {/if}
  </section>
</section>
