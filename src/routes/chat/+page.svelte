<script>
    let prompt = $state('')
</script>

<div class="items-center justify-items-center flex flex-row">
<input type="text" bind:value={prompt} class="">
<button onclick={console.log(prompt)} class="p-2"> Submit </button>
</div>