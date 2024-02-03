<script lang="ts">
	export let title: string;
	export let url: string;
	export let id: string;
	export let isOpen: boolean;
</script>

<div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
	<div class="">
		<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
			{title}
		</h3>
		{#if url}
			<a
				class="link btn rounded-md py-1 px-2 text-neutral-600 bg-neutral-200 hover:bg-neutral-400 hover:text-neutral-100"
				href={url}
			>
				See attachment(s)
			</a>
		{/if}
	</div>
	<button
		type="button"
		class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
		data-modal-hide={id}
		on:click={() => (isOpen = false)}
	>
		<svg
			class="w-3 h-3"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 14"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
			/>
		</svg>
		<span class="sr-only">Close modal</span>
	</button>
</div>
