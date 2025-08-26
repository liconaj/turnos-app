<script>
	let { dialog = $bindable(), children, onclose = () => {} } = $props();
</script>

<dialog bind:this={dialog} class="modal">
	<div class="modal-box scroll-auto bg-base-100">
		<form method="dialog" id="close-form">
			<button
				type="button"
				aria-label="close"
				class="btn absolute top-2 right-2 btn-circle btn-ghost btn-sm"
				onclick={() => onclose()}
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
		{#if children}
			{@render children()}
		{/if}
	</div>
</dialog>
