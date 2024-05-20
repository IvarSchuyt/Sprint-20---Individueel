<script>
    import { Button } from '$lib/index.js';
    import { onMount } from 'svelte';
    import {gsap}  from "gsap/dist/gsap";        
    import {ScrollTrigger} from "gsap/dist/ScrollTrigger";   

    export let data;
    const hygraphData = data.programmas[0].program;


    onMount (() => {
        gsap.registerPlugin(ScrollTrigger);
        const scrolltrigger = document.querySelector("section");
        if (scrolltrigger) {
        const swag = scrolltrigger.querySelectorAll("circle, line, .swag");
        gsap.to(swag, {
            scrollTrigger: {
			// gebruik de container als relatieve trigger voor de start en end van de animatie
			trigger: scrolltrigger,
			scroller: "body",
			// eerste value is relatief aan het trigger-element, tweede value is relatief aan de 'scroller'
			start: "top +100",
			end: "center center",
			markers: {startColor: "dodgerblue", endColor: "dodgerblue", fontSize: "10px", indent: 60},
			id: 'stagger',
			scrub: true
		},
		stagger: 0.1,
        stroke: "green",
        opacity: "1",
	});
}
        }
    );
</script>

<section>
    <svg>
        <circle r="15" cx="50" cy="125" fill="green"/>
        <circle r="25 " cx="50" cy="125" fill="transparent" stroke="green" stroke-width="1"/>
        <line x1="50" y1="250" x2="50" y2="150" stroke="black"/>
        <circle r="15" cx="50" cy="275" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="275" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="425" x2="50" y2="300" stroke="black"/>
        <circle r="15" cx="50" cy="450" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="450" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="575" x2="50" y2="475" stroke="black"/>
        <circle r="25 " cx="50" cy="600" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="725" x2="50" y2="625" stroke="black"/>
        <circle r="25 " cx="50" cy="750" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="875" x2="50" y2="775" stroke="black"/>
        <circle r="25 " cx="50" cy="900" fill="transparent" stroke="black" stroke-width="1" />
    </svg>

    <div class="page-middle">
        <h1>Programma</h1>
        <ol>
            {#each hygraphData.stepProgram as step, i}
                <li>
                    <h2 tabindex="0">{step}</h2>
                    <p class="popup">{hygraphData.descriptionProgram[i]}</p>
                </li>
            {/each}
        </ol>
    </div>
    <div class="page-right">
        <div class="attendance">
            <h3>{hygraphData.attendanceBlob.headingBlob}</h3>
            <p>{hygraphData.attendanceBlob.textBlob}</p>
        </div>
        <div class="contact">
            <h3>{hygraphData.blobContact.headingBlob}</h3>
            <p>{hygraphData.blobContact.textBlob}</p>
            <p>{hygraphData.blobContact.lineBlob}</p>
            <ul>
                <li>{hygraphData.blobContact.emailBlob[0]}</li>
                <li>{hygraphData.blobContact.emailBlob[1]}</li>
                <li>{hygraphData.blobContact.emailBlob[2]}</li>
            </ul>
        </div>

    </div>
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        padding: 0 8rem;
    }

    svg{
        display: none;
    }

    .swag{
        opacity: 0;
    }

    h1{
        padding-bottom: 3rem;
    }

    .page-middle p{
        opacity: 0;
        max-height: 0;
        padding-top: 1rem;
        transition: 200ms ease-out;
    }

    ol{
        list-style-type: none;
    }

    ol > li{
        margin-bottom: 7rem;
    }

    h2:focus + p, h2:hover + p{
        max-height: 100vh;
        opacity: 1;
    }
    .page-right{
        display: flex;
        flex-direction: column;
    }

    ul{
        list-style-type: none;
        font-size: var(--p-font-size);
    }

    .attendance, .contact{
        background: var(--lightmode-accent-color);
        padding: 2rem;
        border-radius: 1rem;
        position: sticky;
    }

    .attendance{
        margin-bottom: 2rem;
        top: 1rem;
    }

    .contact{
        top: 12rem;
    }

    .contact p:nth-of-type(2){
       font-weight: 700;
       padding: 1rem 0;
    }

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {
        section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
        svg{
            display: block;
        }
    }
</style>