<script>
	import '../app.css';

	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	let { children } = $props();
</script>

<Header />
<main class="h-screen">
	{@render children()}
</main>
<Footer />