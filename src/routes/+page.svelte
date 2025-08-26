<script>
	import { appState } from '$lib/state.svelte';
</script>

{#if appState.currentPerson !== null}
	<h1 class="text-3xl text-base-content/60">Hola, {appState.currentPerson.name}</h1>
{/if}
