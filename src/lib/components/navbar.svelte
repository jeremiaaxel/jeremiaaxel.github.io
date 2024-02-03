<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import Profile from '$lib/data/profile';
	import { Badge } from '$lib/components/ui/badge';
</script>

<section>
	<Menubar.Root>
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
			<Menubar.Trigger class="bg-slate-50 whitespace-nowrap">
				<a href="https://moneybackward.jeremiaaxel.my.id" target="_blank">
					Money Backward
					<Badge class="ml-1 bg-gray-400 text-white outline-none">New</Badge>
				</a>
      </Menubar.Trigger>
		</Menubar.Menu>
	</Menubar.Root>
</section>
