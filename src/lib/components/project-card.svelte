<script lang="ts">
	import type { Project } from '$lib/types/project';
	import { formatArrays } from '$lib/utils/formatting';
	import * as Card from '$lib/components/ui/card';

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
	<Card.Content>
		<ol class="list-decimal list-inside flex flex-col">
			{#each data.tasks as task}
				<li class="">
					<p class="task-name inline">{task.name}</p>
				</li>
			{/each}
		</ol>
		<div class="tech-stack">
			<div class="font-medium">Tech Stack(s):</div>
			<p>
				{formatArrays(
					data.techStacks.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
				)}
			</p>
		</div>
		<div class="tags">
			<div class="font-medium">Tag(s):</div>
			<p class="capitalize">{formatArrays(data.tags)}</p>
		</div>
	</Card.Content>
	<Card.Footer>
		<button
			type="button"
			on:click={onClick}
			class="btn rounded-md py-1 px-2 text-neutral-600 bg-neutral-200 hover:bg-neutral-400 hover:text-neutral-100"
		>
			Learn more
		</button>
	</Card.Footer>
</Card.Root>
