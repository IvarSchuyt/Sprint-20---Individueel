<script>
    import { Nav, Logo } from '$lib/index.js';
    
    export let urlLogo, titleHome, titleProgram, titleCommunity, titleExtras, titleProfile;
</script>

<header>

    <a href="/"><Logo urlLogo="{urlLogo}" /></a>
    <Nav
        titleHome="{titleHome}"
        titleProgram="{titleProgram}"
        titleCommunity="{titleCommunity}"
        titleExtras="{titleExtras}"
        titleProfile="{titleProfile}"
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