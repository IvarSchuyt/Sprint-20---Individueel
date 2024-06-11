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
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (scrolltrigger && !prefersReducedMotion) {
            const animation = scrolltrigger.querySelectorAll("circle, line, .animation");
            gsap.to(animation, {
                scrollTrigger: {
                    trigger: scrolltrigger,
                    scroller: "body",
                    start: "top +100",
                    end: "center center",
                    scrub: true
                },
                stagger: 1,
                stroke: "green",
                opacity: "1",
            });
        }
    });
</script>

<section>
    <svg>
        <circle r="15" cx="50" cy="125" fill="green"/>
        <circle r="25 " cx="50" cy="125" fill="transparent" stroke="green" stroke-width="1"/>
        <line x1="50" y1="150" x2="50" y2="255" stroke="black"/>
        <circle r="15" cx="50" cy="280" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="280" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="305" x2="50" y2="435" stroke="black"/>
        <circle r="15" cx="50" cy="460" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="460" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="485" x2="50" y2="590" stroke="black"/>
        <circle r="15" cx="50" cy="615" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="615" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="640" x2="50" y2="705" stroke="black"/>
        <circle r="15" cx="50" cy="730" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="730" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="755" x2="50" y2="885" stroke="black"/>
        <circle r="15" cx="50" cy="910" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="910" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="935" x2="50" y2="1040" stroke="black"/>
        <circle r="15" cx="50" cy="1065" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="1065" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1090" x2="50" y2="1200" stroke="black"/>
        <circle r="15" cx="50" cy="1225" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="1225" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1250" x2="50" y2="1375" stroke="black"/>
        <circle r="15" cx="50" cy="1400" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="1400" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1425" x2="50" y2="1555" stroke="black"/>
        <circle r="15" cx="50" cy="1580" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="1580" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1605" x2="50" y2="1690" stroke="black"/>
        <circle r="15" cx="50" cy="1715" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="1715" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1740" x2="50" y2="1825" stroke="black"/>
        <circle r="15" cx="50" cy="1850" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="1850" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="1875" x2="50" y2="1985" stroke="black"/>
        <circle r="15" cx="50" cy="2010" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="2010" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="2035" x2="50" y2="2185" stroke="black"/>
        <circle r="15" cx="50" cy="2210" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="2210" fill="transparent" stroke="black" stroke-width="1" />
        <line x1="50" y1="2235" x2="50" y2="2315" stroke="black"/>
        <circle r="15" cx="50" cy="2340" fill="green" class="animation"/>
        <circle r="25 " cx="50" cy="2340" fill="transparent" stroke="black" stroke-width="1" />
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

    .animation{
        opacity: 0;
    }

    h1{
        padding-bottom: 3rem;
        text-align: center;
        font-weight: 600;
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
    
    h2{
        font-weight: 600;
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

        h1{
            text-align: left;
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