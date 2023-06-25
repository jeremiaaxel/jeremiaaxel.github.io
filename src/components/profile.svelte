<script lang="ts">
	import type { Profile } from '$lib/types/profile';

	export let data: Profile;
</script>

<section id="profile">
	<h1 class="text-2xl">{data.name}</h1>
	<p>{data.description}</p>
	<section class="links flex flex-row">
		{#each data.links as link}
			<a class="mx-2" href={link.url}>{link.name}</a>
		{/each}
	</section>
</section>
