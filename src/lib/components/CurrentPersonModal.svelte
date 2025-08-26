<script>
	import { appState } from '$lib/state.svelte';
	import CurrentUserAvatar from './CurrentUserAvatar.svelte';
	import Modal from './Modal.svelte';

	let { dialog = $bindable() } = $props();

	function onexit() {
		appState.currentPerson = null;
	}
</script>

<Modal bind:dialog>
	<div class="inline-flex items-center gap-4">
		<CurrentUserAvatar isButton={false} />
		<h1 class="text-xl">{appState.currentPerson?.name}</h1>
	</div>

	<div class="modal-action flex w-full">
		<!--Exit-->
		<form id="exit-form" method="dialog" class="flex-1">
			<button type="button" class="btn w-full btn-soft btn-secondary" onclick={() => onexit()}>
				Salir
			</button>
		</form>
		<!--Accept-->
		<form id="accept-current-person-form" method="dialog" class="flex-1">
			<button type="button" class="btn w-full btn-neutral"> Aceptar </button>
		</form>
	</div>
</Modal>
