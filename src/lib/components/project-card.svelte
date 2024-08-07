<script lang="ts">
  import type { Project } from '$lib/types/project';
  import * as Card from '$lib/components/ui/card';
  import * as Accordion from '$lib/components/ui/accordion';
  import * as Dialog from '$lib/components/ui/dialog';
  import { buttonVariants } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';

  export let data: Project;
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
          <Button variant="link" class="p-0 m-0 text-base h-fit">
            <a class="link" href={data.organizationUrl}>
              {data.organization}
            </a>
          </Button>
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
          <Accordion.Trigger
            data-umami-event="Project Card Task"
            data-umami-event-project-task={`${data.name}-${task.name}`}
          >
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
  <Card.Footer>
    <Dialog.Root>
      <Dialog.Trigger
        class={buttonVariants({ variant: 'outline' })}
        data-umami-event="Project Card See Full"
        data-umami-event-project={data.name}
      >
        See full
      </Dialog.Trigger>
      <Dialog.Content class="overflow-y-scroll max-h-screen">
        <Dialog.Header>
          <Dialog.Title>
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
          </Dialog.Title>
          <Dialog.Description>
            {data.description}
          </Dialog.Description>
        </Dialog.Header>
        <div class="flex flex-col gap-4">
          <ol class="list-decimal list-inside flex flex-col gap-2">
            {#each data.tasks as task}
              <li>
                <span class="font-medium">{task.name}</span>
                <p class="text-sm">{task.description}</p>
              </li>
            {/each}
          </ol>
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
        </div>
      </Dialog.Content>
    </Dialog.Root>
  </Card.Footer>
</Card.Root>
