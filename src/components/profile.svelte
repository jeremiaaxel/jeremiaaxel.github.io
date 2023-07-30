<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	export let data: Profile;
	data.links.forEach(link => {
		if (link.icon) {
			let lastSlash = link.icon.lastIndexOf('/');
			link.iconAlt = link.icon.substring(lastSlash + 1);
		}
	});
</script>

<section id="profile" class="flex flex-col">
	<h1 class="text-2xl">{data.name}</h1>
	<p>{data.description}</p>
	<section class="links flex flex-row">
		{#each data.links as link}
			<a class="p-2 mx-1 link rounded-md bg-neutral-100 hover:bg-neutral-50" href={link.url} target="_blank">
				{#if link.icon}
					<img width="25" height="25" src={link.icon} alt="{link.iconAlt}"/>
				{:else}
					{link.name}
				{/if}
			</a>
		{/each}
	</section>
</section>
