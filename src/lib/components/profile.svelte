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
	class="flex flex-col h-[78vh] justify-center items-center text-center"
	bind:this={profileSection}
>
	<div>
		<h1 class="text-7xl">{data.name}</h1>
		<p class="text-lg whitespace-pre-line">{data.description}</p>
		<section class="links flex flex-row justify-center">
			{#each data.links as link, idx (idx)}
				<a
					class="p-2 mx-1 link rounded-md hover:scale-125 transition-transform bg-neutral-50 hover:bg-neutral-200"
					href={link.url}
					target="_blank"
					title={link.name}
				>
					{#if link.icon}
						<svelte:component this={link.icon} />
					{:else}
						{link.name}
					{/if}
				</a>
			{/each}
		</section>
	</div>
</section>
