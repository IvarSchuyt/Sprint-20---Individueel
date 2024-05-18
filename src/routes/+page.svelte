<script>
    	import { Hero, Text, Program, Goals, Offer } from '$lib/index.js';

		export let data;
		const hygraphData = data.pages[0];

</script>

<Hero 
	img25="{hygraphData.hero.hero25.url}"
	img50="{hygraphData.hero.hero50.url}"
	img100="{hygraphData.hero.hero100.url}"
/>
<Text 
	headingMission="{hygraphData.text.headingMission}"
	pMissionDesktop="{hygraphData.text.pMissionDesktop}"
	pMissionMobile="{hygraphData.text.pMissionMobile}"
	headingIntro="{hygraphData.text.headingIntro}"
	pIntro1="{hygraphData.text.pIntro1}"
	pIntro2="{hygraphData.text.pIntro2}"
	imgJoyceJoost="{hygraphData.text.imgJoyceJoost.url}"
	headingContent="{hygraphData.text.headingContent}"
	pContent1="{hygraphData.text.pContent1}"
	pContent2="{hygraphData.text.pContent2}"
	pContent3="{hygraphData.text.pContent3}"
	imgLaptop="{hygraphData.text.imgLaptop.url}"
	imgMalaga="{hygraphData.text.imgMalaga.url}"

/>
<Program />
<Goals />
<Offer />
