<script>
    import { Nav, Logo } from '$lib/index.js';
    
    export let linkHome;
</script>

<header>

    <a href="#"><Logo /></a>
    <Nav
        linkHome="{linkHome}"
    />

</header>   

<style>

    *{
        font-family: var(--primary-font-family);
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7rem;
        padding: 0 2rem;
    }

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {
        header{
            padding: 0 7rem;
    }
}

</style>