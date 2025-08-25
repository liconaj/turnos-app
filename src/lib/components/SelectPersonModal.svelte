<script>
	import { getPersons } from '$lib/services/api';

	let { dialog = $bindable() } = $props();

	const defaultText = 'Seleccionar persona';
	let selectedPerson = $state(defaultText);
</script>

<dialog bind:this={dialog} class="modal">
	<div class="modal-box max-h-[90vh] scroll-auto bg-base-100">
		<form method="dialog">
			<button
				aria-label="close"
				class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
				onclick={() => (selectedPerson = '')}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="currentColor"
				>
					<path
						d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
					/>
				</svg>
			</button>
		</form>
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
	</div>
</dialog>
