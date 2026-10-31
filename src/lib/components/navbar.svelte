<script lang="ts">
  import * as Menubar from '$lib/components/ui/menubar';
  import Profile from '$lib/data/profile';
  import { appUrl } from '$lib/config';
  import DarkModeToggle from './dark-mode-toggle.svelte';
</script>

<section>
  <Menubar.Root class="w-full">
    <Menubar.Menu>
      <Menubar.Trigger>
        <a href="/">Home</a>
      </Menubar.Trigger>
    </Menubar.Menu>
    <Menubar.Menu>
      <Menubar.Trigger class="cursor-pointer">Contact</Menubar.Trigger>
      <Menubar.Content>
        {#each Profile.links as link}
          <Menubar.Item class="cursor-pointer">
            <a href={link.url} class="capitalize flex gap-2" target="_blank">
              <svelte:component this={link.icon} class="size-4" />
              {link.name}
            </a>
          </Menubar.Item>
        {/each}
      </Menubar.Content>
    </Menubar.Menu>
    <Menubar.Menu>
      <Menubar.Trigger>
        <a href={appUrl('moneybackward')} target="_blank">
          Money Backward
        </a>
      </Menubar.Trigger>
    </Menubar.Menu>
    <Menubar.Menu>
      <Menubar.Trigger>
        <a href={appUrl('work-utils')} target="_blank">
          Work Utils
        </a>
      </Menubar.Trigger>
    </Menubar.Menu>
    <Menubar.Menu>
      <Menubar.Trigger class="cursor-pointer !ml-auto !bg-opacity-0">
        <DarkModeToggle />
      </Menubar.Trigger>
    </Menubar.Menu>
  </Menubar.Root>
</section>
