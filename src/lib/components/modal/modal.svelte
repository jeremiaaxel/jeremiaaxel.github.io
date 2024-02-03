<script lang="ts">
	import ModalHeader from './modal-header.svelte';
	import ModalBody from './modal-body.svelte';
	import ModalFooter from './modal-footer.svelte';

	export let id: string;
	export let title: string;
	export let url: string = '';
	export let isOpen: boolean = false;

	// prevent scrolling when modal is open
	$: {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	function closeOnEscape(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	function closeModal() {
		if (!isOpen) return;
		isOpen = false;
		window.addEventListener("keydown", closeOnEscape);
	}
</script>

<!-- Main modal -->
<div
	{id}
	tabindex="-1"
	aria-hidden={!isOpen}
	role="dialog"
	data-modal-placement="center"
	class={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
		isOpen ? 'block' : 'hidden'
	}`}
	on:click={() => closeModal()}
>
	<div class="relative w-fulld max-h-full">
		<!-- Modal content -->

		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<section
			class="relative bg-white rounded-lg shadow dark:bg-gray-700 mx-auto max-w-2xl min-w-sm"
			role="dialog"
			on:click={(event) => {
				event.stopPropagation();
			}}
		>
			<!-- Modal header -->
			<ModalHeader {title} {url} {id} bind:isOpen />
			<!-- Modal body -->
			<ModalBody>
				<slot name="body" />
			</ModalBody>
			<!-- Modal footer -->
			{#if $$slots.footer}
				<ModalFooter>
					<slot name="footer" />
				</ModalFooter>
			{/if}
		</section>
	</div>
</div>
