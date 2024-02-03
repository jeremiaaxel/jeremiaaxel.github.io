<script lang="ts">
	import type { Profile } from '$lib/types/profile';
	import { afterUpdate } from 'svelte';

	export let data: Profile;
	data.links.forEach((link) => {
		if (link.icon) {
			let lastSlash = link.icon.lastIndexOf('/');
			link.iconAlt = link.icon.substring(lastSlash + 1);
		}
	});

	let profileSection: HTMLElement;
	afterUpdate(() => {
		if (!profileSection) {
			return;
		}
		console.log(profileSection.offsetTop);
	});
	let linksStyles: boolean[] = [];
	for (const link of data.links) {
		linksStyles.push(false);
	}

	function onHover(idx: number) {
		linksStyles[idx] = true;
	}
	function onUnhover(idx: number) {
		linksStyles[idx] = false;
	}
</script>

<section
	id="profile"
	class="flex flex-col h-[85vh] justify-center items-center text-center"
	bind:this={profileSection}
>
	<div>
		<h1 class="text-7xl">{data.name}</h1>
		<p class="text-lg">{data.description}</p>
		<section class="links flex flex-row justify-center">
			{#each data.links as link, idx (idx)}
				<a
					class="p-2 mx-1 link rounded-md hover:scale-125 transition-transform bg-neutral-50 hover:bg-neutral-200"
					href={link.url}
					target="_blank"
					title={link.name}
					on:mouseover={() => {
						onHover(idx);
					}}
					on:focus={() => {}}
					on:mouseout={() => {
						onUnhover(idx);
					}}
					on:blur={() => {}}
				>
					{#if link.icon}
						{#if link.hoverIcon && linksStyles[idx]}
							<img width="25" height="25" src={link.hoverIcon} alt={link.iconAlt} />
						{:else}
							<img width="25" height="25" src={link.icon} alt={link.iconAlt} />
						{/if}
					{:else}
						{link.name}
					{/if}
				</a>
			{/each}
		</section>
	</div>
</section>
