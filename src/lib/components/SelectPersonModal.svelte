<script>
	import { getPersons } from '$lib/services/api';
	import { appState } from '$lib/state.svelte';
	import Modal from './Modal.svelte';

	let { dialog = $bindable() } = $props();

	const defaultText = '--Seleccionar persona--';
	/**
	 * @type {Person | null}
	 */
	let selectedPerson = $state(null);

	function onclose() {
		selectedPerson = null;
	}

	function oncontinue() {
		appState.currentPerson = selectedPerson;
	}
</script>

<Modal bind:dialog {onclose}>
	<!--Lista de personas-->
	<fieldset class="fieldset">
		<legend class="fieldset-legend">Gestionar turnos de</legend>
		{#await getPersons()}
			<select id="select-person-loading" class="select w-full select-lg" disabled>
				<option>Cargando personas...</option>
			</select>
		{:then persons}
			<select id="select-person" bind:value={selectedPerson} class="select w-full select-lg">
				<option value={null} disabled>{defaultText}</option>
				{#each persons.sort() as person, i}
					<option value={person}>
						{person.name}
					</option>
				{/each}
			</select>
		{/await}
	</fieldset>

	<!--Botón de continuar-->
	<div class="modal-action">
		<!--Cancel-->
		<form name="cancel-form" method="dialog" class="flex-1">
			<button type="button" class="btn w-full btn-ghost" onclick={() => onclose()}>
				Cancelar
			</button>
		</form>
		<!--Continue-->
		<form id="continue-with-user-form" method="dialog" class="flex-1">
			<button
				type="button"
				disabled={selectedPerson === null}
				onclick={() => oncontinue()}
				class="btn w-full btn-primary"
			>
				Continuar
			</button>
		</form>
	</div>
</Modal>
