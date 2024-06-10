<script>
    import { NavIcon } from '$lib/index.js';
    import { onMount } from 'svelte';
    export let data;

    const hygraphData = data.pages[0];

    onMount(() => {
    const detailsElement = document.querySelector('nav > details');

    function checkWindowSize() {
        if (window.innerWidth >= 850) {
        detailsElement.setAttribute('open', '');
        } else {
        detailsElement.removeAttribute('open');
        }
    }

    // Run once on mount
    checkWindowSize();

    // Update when window is resized
    window.addEventListener('resize', checkWindowSize);

    // Cleanup function
    return () => {
        window.removeEventListener('resize', checkWindowSize);
    };
    });

</script>
 
<nav>
     <details open>
        <summary>
            <NavIcon />
        </summary>
        <ul>
            <li><a href="/">{hygraphData.header.home}</a></li>
            <li><a href="/{hygraphData.header.program}">{hygraphData.header.program}</a></li>
            <li><a href="/{hygraphData.header.community}">{hygraphData.header.community}</a></li>
            <li><a href="https://www.yourjourney.academy/extras/" target="_blank">{hygraphData.header.extras}</a></li>
        </ul>
    </details>
</nav>

<style>

nav{
    display: flex;
    justify-content: space-between;
}

details {
    view-transition-name: details-open;
}

summary {
    list-style: none;
}

summary::-webkit-details-marker {
  display: none; 
}

ul{
    list-style: none;
    position: absolute;
    width: 100vw;
    padding: 0.75em 0;
    top: 7rem;
    left: 0;
    background: white;
}

li:last-of-type{
    display: none;
}

a{
    text-decoration: none;
    color: var(--lightmode-color);
    display: block;
    padding: 0.5rem 2rem;
    text-align: right;
    position: relative;
}


/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */


@media  (min-width: 850px) {

    summary{
        display: none;
    }

    ul{
        display: flex;
        position: relative;
        top: 0;
        width: auto;
        align-items: center;
    }

    li:last-of-type{
        display: block;
    }

    

    a::after{
        content: "";
        opacity: 0;
        background-color: var(--lightmode-text-color);
        transition: all 400ms ease-out;
        position: absolute;
        height: 2px;
        width: calc(100% - 3rem);
        left: 0;
        top: 2rem;
        box-sizing: border-box;
        transform: translateX(1.5rem);
    }

    a:hover::after{
        opacity: .8;
    }
}

</style>