<script>
	import Logo from '$lib/components/Logo.svelte';
	import SelectPersonModal from './SelectPersonModal.svelte';

	/**
	 * @type {HTMLDialogElement}
	 */
	// svelte-ignore non_reactive_update
	let selectPersonDialog;
</script>

<nav class="navbar h-20 bg-base-300 px-6 shadow-sm">
	<div class="flex-1">
		<a href="/"><Logo /></a>
	</div>
	<!--Diálogo modal para seleccionar persona-->
	<SelectPersonModal bind:dialog={selectPersonDialog} />

	<!--Botón para abrir diáologo modal-->
	<div class="flex-none">
		<button class="btn btn-primary" onclick={() => selectPersonDialog.showModal()}>
			Mis turnos
		</button>
	</div>
</nav>
