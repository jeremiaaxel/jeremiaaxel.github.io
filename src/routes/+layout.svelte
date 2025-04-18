<script lang="ts">
  import '../app.css';
  import { ModeWatcher } from 'mode-watcher';
  import { Toaster } from '$lib/components/ui/sonner';
  import posthog from 'posthog-js';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import { PUBLIC_POSTHOG_API_KEY, PUBLIC_POSTHOG_HOST } from '$env/static/public';

  onMount(() => {
    if (browser) {
      posthog.init(PUBLIC_POSTHOG_API_KEY, {
        api_host: PUBLIC_POSTHOG_HOST,
        person_profiles: 'always',
      });
    }
  });
</script>

<ModeWatcher />
<Toaster position="top-center" expand={false} />
<slot />
