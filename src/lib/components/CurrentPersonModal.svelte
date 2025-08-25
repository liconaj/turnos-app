<script>
	import { appState } from '$lib/state.svelte';
	import CurrentUserAvatar from './CurrentUserAvatar.svelte';
	import Modal from './Modal.svelte';

	let { dialog = $bindable() } = $props();
</script>

<Modal bind:dialog>
	<div class="inline-flex items-center gap-4">
		<CurrentUserAvatar />
		<h1 class="text-xl">{appState.currentPerson?.name}</h1>
	</div>

	<!--Botón de continuar-->
	<div class="modal-action flex w-full">
		<button class="btn flex-1 btn-soft btn-secondary"> Salir </button>
		<button class="btn flex-1 btn-soft btn-neutral"> Cambiar </button>
	</div>
</Modal>
