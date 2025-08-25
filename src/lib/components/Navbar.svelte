<script>
	import { appState } from '$lib/state.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import SelectPersonModal from './SelectPersonModal.svelte';
	import CurrentPersonModal from './CurrentPersonModal.svelte';
	import CurrentUserAvatar from './CurrentUserAvatar.svelte';

	/**
	 * @type {HTMLDialogElement}
	 */
	// svelte-ignore non_reactive_update
	let selectPersonDialog;

	/**
	 * @type {HTMLDialogElement}
	 */
	let currentPersonDialog;
</script>

<nav class="navbar h-20 bg-base-200 px-6 shadow-sm">
	<div class="flex-1">
		<a href="/"><Logo /></a>
	</div>

	<div class="flex-none">
		{#if appState.currentPerson == null}
			<!--Diálogo modal para seleccionar persona-->
			<SelectPersonModal bind:dialog={selectPersonDialog} />
			<!--Seleccionar persona-->
			<button class="btn btn-primary" onclick={() => selectPersonDialog.showModal()}>
				Mis turnos
			</button>
		{:else}
			<!--Diálogo modal para ver persona actual-->
			<CurrentPersonModal bind:dialog={currentPersonDialog} />
			<!--Avatar-->
			<button
				class="btn btn-circle"
				aria-label="Ver persona actual"
				onclick={() => currentPersonDialog.showModal()}
			>
				<CurrentUserAvatar />
			</button>
		{/if}
	</div>
</nav>
