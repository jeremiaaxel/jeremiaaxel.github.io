<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent } from '$lib/components/ui/card';
  import { Phone } from 'lucide-svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div
  class="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4"
>
  <Card class="max-w-md w-full bg-white/90 backdrop-blur-sm shadow-xl">
    <CardContent class="p-8 text-center">
      <h1 class="text-3xl font-bold text-purple-800 mb-6">Hey there! 👋</h1>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">
        You can just text or call me, no need for arrangement, anytime.
      </p>
      <div class="flex justify-center">
        <Button variant="outline" class="text-purple-800 border-purple-800 bg-white hover:bg-purple-100 hover:text-purple-800">
          <a href={data.whatsappUrl} target="_blank" rel="noopener noreferrer" class="flex items-center">
            <Phone class="h-5 w-5 mr-2" />
            Call me anytime
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
</div>
