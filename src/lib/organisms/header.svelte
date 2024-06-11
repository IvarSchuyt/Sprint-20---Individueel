<script>
    import { Nav, Logo } from '$lib/index.js';
    export let data;
    
    const hygraphData = data.pages[0];
</script>

<header>

    <a href="/" aria-label="Home"><Logo urlLogo="{hygraphData.header.logo.logo.url}" /></a>
    <Nav {data}/>

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
    @media  (min-width: 850px) {
        header{
            padding: 0 7rem;
    }
}

</style>