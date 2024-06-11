<script>
    import { HeroCard } from '$lib/index.js';
    export let data;

    const hygraphData = data.pages[0];
</script>

<section>
    <div>
        <picture>
            <source media="(min-width: 900px)" srcset="{hygraphData.hero.hero100.url}" height="968" width="1451">
            <source media="(min-width: 600px)" srcset="{hygraphData.hero.hero50.url}" height="854" width="1280">
            <img src="{hygraphData.hero.hero25.url}" alt="" height="640" width="427">
        </picture>
    </div>
    <HeroCard
        {data}
    />

</section>

<style>

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    div{
        height: 12.5rem;
        width: 100%;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 100% 25%;
    }

    section{
        display: flex;
        flex-direction: column;
    }
    @media  (min-width: 850px) {
        div{
            height: 37.5rem;
    }
        img{
            object-position: 50% 40%;
        }
}

</style>