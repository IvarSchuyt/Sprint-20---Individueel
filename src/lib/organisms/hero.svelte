<script>
    import { HeroCard } from '$lib/index.js';

    export let img25, img50, img100;
    export let data;
</script>

<section>
    <div>
        <picture>
            <source media="(min-width: 900px)" srcset="{img100}" height="968" width="1451">
            <source media="(min-width: 600px)" srcset="{img50}" height="854" width="1280">
            <img src="{img25}" alt="" height="640" width="427">
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

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {
        div{
            height: 37.5rem;
    }
        img{
            object-position: 50% 40%;
        }
}

</style>