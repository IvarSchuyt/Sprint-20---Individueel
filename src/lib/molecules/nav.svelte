<script>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="closed">
                <path d="M3 12H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opened">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
                
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
        width: 100%;
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
    details:not([open]) .opened {
        display: none;
    }

    details[open] .closed {
        display: none;
    }


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

        li{
            padding-right: none;
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