<script lang="ts">
  import type { Brand } from '$lib/types/brand';
  import type { SidebarItem } from '$lib/types/sidebar_item';
  import sidebarCollapseIcon from '$lib/assets/left-sidebar-collapse.svg';
  import sidebarExpandIcon from '$lib/assets/left-sidebar-expand.svg';

  export let data: SidebarItem[];
  export let brand: Brand;
  export let isOpen: boolean = true;

  function loadIcons(icons: any[]) {
    for (let item of data) {
      if (!item.icon) {
        icons.push(null);
        continue;
      }

      try {
        const icon = new URL(`../lib/assets/${item.icon}`, import.meta.url).href;
        icons.push(icon);
      } catch (e) {
        console.error(e);
        icons.push(null);
      }
    }
  }

  let icons: any[] = [];
  loadIcons(icons);

  let shortName = brand.shortName;
  if (shortName === undefined) {
    shortName = brand.name
      .split(' ')
      .map((word) => word[0])
      .join('');
  }
</script>

<aside
  id="sidebar"
  class="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0"
  aria-label="Sidebar"
>
  <div class="h-full px-3 py-4 overflow-y-auto bg-neutral-200">
    <button
      type="button"
      on:click={() => {
        isOpen = !isOpen;
      }}
      class="p-2 text-gray-900 rounded-lg group hover:bg-neutral-300 w-full"
    >
      {#if isOpen}
        <img src={sidebarCollapseIcon} alt="sidebar collapse icon" />
      {:else}
        <img src={sidebarExpandIcon} alt="sidebar expand icon" />
      {/if}
    </button>
    <a href={brand.url} class="flex items-center rounded-lg p-5 mb-5 hover:bg-neutral-300">
      {#if brand.icon}
        <img src={brand.icon} class="h-6 mr-3 sm:h-7" alt={brand.iconAlt} />
      {/if}
      <span class="self-center text-xl font-semibold whitespace-nowrap">
        {#if isOpen}
          {brand.name}
        {:else}
          {shortName}
        {/if}
      </span>
    </a>
    <ul class="space-y-2 font-medium">
      {#each data as item, index}
        <li>
          <a
            href={item.url}
            class="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-neutral-300"
          >
            {#if item.icon}
              <img src={icons[index]} alt={item.icon} class="w-5 h-5 mr-3 sm:w-6 sm:h-6" />
            {/if}
            {#if isOpen}
              <span class="ml-3">{item.name}</span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</aside>
