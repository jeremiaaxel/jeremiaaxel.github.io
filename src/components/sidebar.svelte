<script lang="ts">
	import type { Brand } from '$lib/types/brand';
	import type { SidebarItem } from '$lib/types/sidebar_item';

	export let data: SidebarItem[];
	export let brand: Brand;
</script>

<aside
	id="sidebar"
	class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
	aria-label="Sidebar"
>
	<div class="h-full px-3 py-4 overflow-y-auto bg-neutral-200">
		<a href="{brand.url}" class="flex items-center rounded-lg p-5 mb-5 hover:bg-neutral-300">
			{#if brand.icon}
				<img src={brand.icon} class="h-6 mr-3 sm:h-7" alt={brand.iconAlt} />
			{/if}
			<span class="self-center text-xl font-semibold whitespace-nowrap"
				>{brand.name}</span
			>
		</a>
		<ul class="space-y-2 font-medium">
			{#each data as item}
				<li>
					<a
						href={item.url}
						class="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-neutral-300"
					>
						{#if item.icon}
							<img width="25" height="25" src={item.icon} alt={item.iconAlt} />
						{/if}
						<span class="ml-3">{item.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>
