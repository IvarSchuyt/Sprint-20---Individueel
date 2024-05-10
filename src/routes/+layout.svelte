<script>
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib/index.js'

	export let data;
	const hygraphData = data.pages[0];
</script>

<Header
	urlLogo="{hygraphData.header.logo.logo.url}"
	titleHome="{hygraphData.header.home}"
	titleProgram="{hygraphData.header.program}"
	titleCommunity="{hygraphData.header.community}"
	titleExtras="{hygraphData.header.extras}"
	titleProfile="{hygraphData.header.account}"
/>

<slot />

<Footer />
