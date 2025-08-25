<script>
	import { appState } from '$lib/state.svelte';

	let { children = null, isButton = true } = $props();

	/**
	 * Returns initials of a name
	 * @param {string} name
	 * @returns {string}
	 */
	function getAvatarInitials(name) {
		const parts = name.split(' ');
		let firstLetter = ':';
		let secondLetter = '(';
		if (parts.length == 1) {
			firstLetter = name[0];
			secondLetter = name[1];
		} else if (parts.length > 1) {
			firstLetter = parts[0][0];
			secondLetter = parts[parts.length - 1][0];
		}
		return firstLetter?.toUpperCase() + secondLetter?.toUpperCase();
	}

	let initials = $state(':(');
	if (children == null && appState.currentPerson != null) {
		initials = getAvatarInitials(appState.currentPerson.name);
	}
</script>

<div class="avatar avatar-placeholder">
	<div
		class="w-12 rounded-full bg-primary text-primary-content {isButton
			? 'hover:bg-primary/80'
			: ''}"
	>
		{#if children}
			{@render children()}
		{:else}
			<span>{initials}</span>
		{/if}
	</div>
</div>
