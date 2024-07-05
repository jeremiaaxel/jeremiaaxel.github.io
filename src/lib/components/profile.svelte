<script lang="ts">
  import type { Profile } from '$lib/types/profile';
  import { afterUpdate } from 'svelte';

  export let data: Profile;

  let profileSection: HTMLElement;
  afterUpdate(() => {
    if (!profileSection) {
      return;
    }
    console.log(profileSection.offsetTop);
  });
</script>

<section
  id="profile"
  class="flex flex-col justify-center items-center text-center"
  bind:this={profileSection}
>
  <section
    id="shadow-card"
    class="flex flex-col gap-8 h-full p-5 w-full max-w-[40rem] justify-center items-center text-center"
  >
    <section class="flex flex-col gap-4 justify-center items-center text-center">
      <h1 class="text-6xl">{data.name}</h1>
      <p class="text-lg whitespace-pre-line leading-snug">{data.description}</p>
    </section>
    <section class="links flex flex-row justify-center">
      {#each data.links as link, idx (idx)}
        <a
          class="p-2 mx-1 link rounded-md hover:scale-125 transition-transform bg-neutral-50 hover:bg-neutral-200 dark:bg-neutral-950 dark:hover:bg-neutral-800"
          href={link.url}
          target="_blank"
          title={link.name}
          data-umami-event="Profile Link Clicked"
          data-umami-event-profile-link={link.name}
        >
          {#if link.icon}
            <svelte:component this={link.icon} />
          {:else}
            {link.name}
          {/if}
        </a>
      {/each}
    </section>
  </section>
</section>
