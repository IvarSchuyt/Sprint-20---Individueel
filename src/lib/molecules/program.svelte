<script>
    import { Button } from '$lib/index.js';
</script>

<section>
    <h2>Het programma</h2>
    <ul>
        <li><span>🟢</span>Kennismaking</li>
        <li><span>🟢</span>Workshops & Coaching</li>
        <li><span>🟢</span>1e Studiereis Málaga</li>
        <li><span>🟢</span>Gastspreker</li>
        <li><span>🟢</span>Workshops & Opdrachten</li>
        <li><span>🟢</span>2e Studiereis Málaga</li>
        <li><span>🟢</span>Afronding & Certificering</li>
    </ul>
    <Button 
        buttonText="Bekijk het volledige programma"
    />    
</section>

<style>

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
    }

    h2, ul{
        display: none;
    }
    
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {

        h2{
            display: block;
            padding-bottom: 2rem;
            font-family: var(--primary-font-family);
            color: var(--lightmode-text-color);
            font-weight: 500;
            font-size: var(--h2-font-size);
    }
        ul{
            display: flex;
            list-style: none;
            padding-bottom: 2rem;
            font-family: var(--primary-font-family);
            color: var(--lightmode-text-color);
    }

        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 9rem;
            text-align: center;
    }
        span{
            padding-bottom: 1rem;
        }
}

</style>