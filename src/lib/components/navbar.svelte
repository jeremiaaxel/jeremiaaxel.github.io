<script lang="ts">
  import * as Menubar from '$lib/components/ui/menubar';
  import Profile from '$lib/data/profile';
  import { appUrl } from '$lib/config';
  import { BookOpen, Wallet, Wrench } from 'lucide-svelte';
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
      <Menubar.Trigger class="cursor-pointer">More apps</Menubar.Trigger>
      <Menubar.Content>
        <Menubar.Item class="cursor-pointer">
          <a href={appUrl('blog')} class="capitalize flex gap-2">
            <BookOpen class="size-4" />
            Blog
          </a>
        </Menubar.Item>
        <Menubar.Item class="cursor-pointer">
          <a href={appUrl('moneybackward')} class="capitalize flex gap-2">
            <Wallet class="size-4" />
            Money Backward
          </a>
        </Menubar.Item>
        <Menubar.Item class="cursor-pointer">
          <a href={appUrl('work-utils')} class="capitalize flex gap-2">
            <Wrench class="size-4" />
            Work Utils
          </a>
        </Menubar.Item>
      </Menubar.Content>
    </Menubar.Menu>
    <Menubar.Menu>
      <Menubar.Trigger class="cursor-pointer !ml-auto !bg-opacity-0">
        <DarkModeToggle />
      </Menubar.Trigger>
    </Menubar.Menu>
  </Menubar.Root>
</section>
