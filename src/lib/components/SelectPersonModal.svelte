<script>
	import { getPersons } from '$lib/services/api';
	import Modal from './Modal.svelte';

	let { dialog = $bindable() } = $props();

	const defaultText = 'Seleccionar persona';

	let selectedPerson = $state(defaultText);

	function onclose() {
		selectedPerson = defaultText;
	}
</script>

<Modal bind:dialog {onclose}>
	<!--Lista de personas-->
	<fieldset class="fieldset">
		<legend class="fieldset-legend">Gestionar turnos de</legend>
		{#await getPersons()}
			<select class="select w-full select-lg" disabled>
				<option>Cargando personas...</option>
			</select>
		{:then persons}
			<select bind:value={selectedPerson} class="select w-full select-lg">
				<option disabled>{defaultText}</option>
				{#each persons.sort() as person, i}
					<option>
						{person.name}
					</option>
				{/each}
			</select>
		{/await}
	</fieldset>

	<!--Botón de continuar-->
	<div class="modal-action">
		<button disabled={selectedPerson === defaultText} class="btn btn-block btn-lg btn-neutral">
			Aceptar
		</button>
	</div>
</Modal>
