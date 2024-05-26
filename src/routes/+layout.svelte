<script>
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib/index.js'
	export let data;
</script>

<Header {data} />

<slot />

<Footer {data} />
