<script lang="ts">
	import ModalHeader from './modal-header.svelte';
	import ModalBody from './modal-body.svelte';
	import ModalFooter from './modal-footer.svelte';

	export let id: string;
	export let title: string;
	export let isOpen: boolean = false;
</script>

<!-- Main modal -->
<div
	{id}
	tabindex={-1}
	aria-hidden={!isOpen}
    data-modal-placement="center"
	class={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
		isOpen ? 'block' : 'hidden'
	}`}
>
	<div class="relative w-full max-w-2xl max-h-full">
		<!-- Modal content -->
		<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
			<!-- Modal header -->
			<ModalHeader {title} {id} bind:isOpen />
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
		</div>
	</div>
</div>
