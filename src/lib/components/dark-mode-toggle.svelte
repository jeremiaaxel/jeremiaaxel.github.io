<script lang="ts">
  import { toast } from 'svelte-sonner';
  import { Sun, Moon } from 'lucide-svelte';

  import { toggleMode, mode } from 'mode-watcher';
</script>

<div
  role="button"
  tabindex="0"
  on:click={() => {
    toggleMode();
    toast(`Switched to ${mode.current === 'dark' ? 'dark' : 'light'} mode`);
  }}
  on:keydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMode();
      toast(`Switched to ${mode.current === 'dark' ? 'dark' : 'light'} mode`);
    }
  }}
>
  {#if mode.current === 'dark'}
    <Moon class="h-[1.2rem] w-[1.2rem] transition-all" />
  {:else}
    <Sun class="h-[1.2rem] w-[1.2rem] transition-all" />
  {/if}
  <span class="sr-only">Toggle theme</span>
</div>
