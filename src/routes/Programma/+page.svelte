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
        <circle r="15" cx="50" cy="600" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="600" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="725" x2="50" y2="625" stroke="black"/>
        <circle r="15" cx="50" cy="750" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="750" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="875" x2="50" y2="775" stroke="black"/>
        <circle r="15" cx="50" cy="900" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="900" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1050" x2="50" y2="925" stroke="black"/>
        <circle r="15" cx="50" cy="1075" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="1075" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1200" x2="50" y2="1100" stroke="black"/>
        <circle r="15" cx="50" cy="1225" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="1225" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1355" x2="50" y2="1250" stroke="black"/>
        <circle r="15" cx="50" cy="1380" fill="green" class="swag"/>
        <circle r="25 " cx="50" cy="1380" fill="transparent" stroke="black" stroke-width="1" />
    </svg>

    <div class="page-middle">
        <h1>Programma</h1>
        <ol>
            {#each hygraphData.stepProgram as step, i}
                <li>
                    <h2>{step}</h2>
                    <p>{hygraphData.descriptionProgram[i]}</p>
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
        <a href="https://drive.google.com/file/d/1oRoYDROmGJBZ75q7Ei3rZaqrHyMZKeVt/view" target="_blank">Download het volledige programma</a>
    </div>
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        padding: 0 2rem;
        justify-content: center;
        align-items: center;
    }

    svg{
        display: none;
        max-width: 5rem;
    }

    .swag{
        opacity: 0;
    }

    h1{
        padding-bottom: 3rem;
    }

    .page-middle p{
        padding: 1rem 0 0 0;
    }

    ol{
        list-style-type: none;
    }

    ol > li{
        margin-bottom: 3rem;
    }

    .page-right{
        display: flex;
        flex-direction: column;
        max-width: 35rem;
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
        top: 2rem;
    }

    .contact{
        top: 15rem;
    }

    .contact p:nth-of-type(2){
       font-weight: 700;
       padding: 1rem 0;
    }

    a{
        position: sticky;
        text-align: center;
        padding: .5rem 3rem;
        background-color: var(--lightmode-accent-color);
        border: none;
        border-radius: .25rem;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        text-decoration: none;
        margin-top: 2rem;
        top: 33rem
    }

    a:hover{
        cursor: pointer;
    }

    a:active{
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.175);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.175);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.175);
        scale: .99;
    }

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {
        section{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: normal;
    }
        svg{
            display: block;
        }

        .page-middle{
            padding: 0 2rem;
        }
    }
    
    @media  (min-width: 1300px) {
        section{
            flex-wrap: nowrap;
            justify-content: space-between;
            padding: 0 8rem;
        }
        .page-right{
            width: 30vw;
        }
        }

    @media  (min-width: 1520px) {
        .page-right{
            width: auto;
        }
    }
</style>