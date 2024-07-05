<script lang="ts">
  import type { Notification } from '$lib/types/notification';
  import * as Alert from '$lib/components/ui/alert';

  export let data: Notification;
</script>

<Alert.Root class="bg-gray-200 dark:bg-gray-800">
  {#if data.icon}
    <svelte:component this={data.icon} class="size-5" />
  {/if}
  <Alert.Title>{data.title}</Alert.Title>
  <Alert.Description>{data.detail}</Alert.Description>
</Alert.Root>
