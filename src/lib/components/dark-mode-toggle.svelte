<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Sun, Moon } from 'lucide-svelte';

	import { toggleMode, mode } from 'mode-watcher';
</script>

<button type="button" on:click={toggleMode}>
  {#if $mode === 'dark'}
    <Moon class="h-[1.2rem] w-[1.2rem] transition-all" />
  {:else}
    <Sun class="h-[1.2rem] w-[1.2rem] transition-all" />
  {/if}
	<span class="sr-only">Toggle theme</span>
</button>
