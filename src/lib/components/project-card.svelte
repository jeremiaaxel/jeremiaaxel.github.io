<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { formatArrays } from '$lib/utils/formatting';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Badge } from '$lib/components/ui/badge';

	export let data: Project;
	export let onClick: () => void;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>
			{#if data.url}
				<a class="link" href={data.url}>
					{data.name}
				</a>
			{:else}
				{data.name}
			{/if}
			{#if data.organization}
				@
				{#if data.organizationUrl}
					<a class="link" href={data.organizationUrl}>
						{data.organization}
					</a>
				{:else}
					{data.organization}
				{/if}
			{/if}
		</Card.Title>
		<Card.Description>
			{data.description}
		</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col gap-4">
		<Accordion.Root class="list-decimal list-inside flex flex-col">
			{#each data.tasks as task}
				<Accordion.Item value={task.name}>
					<Accordion.Trigger>
						{task.name}
					</Accordion.Trigger>
					<Accordion.Content>
						{task.description}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
		<div class="tech-stack">
			<div class="font-medium">Tech Stack(s):</div>
			{#each data.techStacks.sort((a, b) => a
					.toLowerCase()
					.localeCompare(b.toLowerCase())) as thisTechStack}
				<Badge variant="outline">{thisTechStack}</Badge>
			{/each}
		</div>
		<div class="tags">
			<div class="font-medium">Tag(s):</div>
			{#each data.tags as tag}
				<Badge variant="outline" class="capitalize">{tag}</Badge>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
