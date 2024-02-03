<script lang="ts">
	import type { Notification } from '$lib/types/notification';

	export let data: Notification;
	export let type: string = 'top_accent_border';
</script>

<section class="notification my-2">
	{#if type === 'top_accent_border'}
		<div
			class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
			role="alert"
		>
			<div class="flex">
				<div class="py-1">
					<svg
						class="fill-current h-6 text-teal-500 mr-4"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						><path
							d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
						/></svg
					>
				</div>
				<div>
					<p class="font-bold">{data.title}</p>
					{#if data.detail}
						<p class="text-sm">{data.detail}</p>
					{/if}
				</div>
			</div>
		</div>
	{:else if type === 'banner'}
  <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
    <p class="font-bold">{data.title}</p>
    <p class="text-sm">{data.detail}</p>
  </div>
	{/if}
</section>
