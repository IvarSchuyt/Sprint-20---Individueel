<script>
	import { page } from '$app/stores';
	import { Header, Hero, Footer } from '$lib/index.js'
</script>

<Header />
<Hero />

<slot />

<Footer />
