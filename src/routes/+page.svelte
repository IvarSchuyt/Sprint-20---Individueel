<script>
    	import { Hero, Text, Program, Goals, Offer } from '$lib/index.js';

		export let data;
</script>

<Hero 
	img25="{data.pages[0].hero.hero25.url}"
	img50="{data.pages[0].hero.hero50.url}"
	img100="{data.pages[0].hero.hero100.url}"
/>
<Text />
<Program />
<Goals />
<Offer />
