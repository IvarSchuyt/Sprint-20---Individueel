<script>
    import { Button } from '$lib/index.js';
</script>

<section>
    <h1>Teacher Mastery</h1>
    <p>Coaching online en in Málaga</p>
    <Button 
        buttonText="Vraag een gesprek aan"
    />
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 10rem;
        width: 100%;
        padding: 2rem 0;
        border-radius: 1rem;
        font-family: var(--primary-font-family);
        color: var(--lightmode-text-color);
        background-image: url(/assets/fingerprints.png);
        background-size: 25rem 20rem;
        background-position: 30% 40%;
        background-color: white;
        border-radius: 1rem;
        margin-top: -2rem;
    }

    h1{
        font-weight: 500;
        font-size: 10vw;
    }

    p{
        font-weight: 500;
        font-size: 6vw;
    }

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 400px) {
        h1{
            font-size: 2.5rem;
    }
        p{
            font-size: 1.5rem;
        }
}
    @media  (min-width: 500px) {
        section{
            background-size: 30rem 25rem;
            background-position: 30% 50%;
        }
}

    @media  (min-width: 850px) {
        section{
            position: absolute;
            top: 23.5rem;
            margin-top: 0rem;
            width: 35rem;
            background-size: 35rem 30rem;
            background-position: 30% 60%;
        }
}

</style>