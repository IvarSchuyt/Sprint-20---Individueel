<script>
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib/index.js'

	export let data;
	const hygraphData = data.pages[0];
</script>

<Header
	linkHome="{hygraphData.header.home}"
/>

<slot />

<Footer />
