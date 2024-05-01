<script>
    import { HeroCard } from '$lib/index.js';
</script>

<section>
    <div>
        <img src="assets/hero-image.jpg" alt="sfeerfoto teacher mastery">
    </div>
    <HeroCard />

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