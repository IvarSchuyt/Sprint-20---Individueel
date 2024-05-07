<section>
    <h2 class="mission">Onze missie</h2>
    <p class="mission-desktop">Teacher Mastery, een innovatief coaching programma voor docenten dat gericht is op het bevorderen van een gezond, gelukkig en zinvol (werk)leven.</p>
    <p class="mission-mobile">Als docent draag je een enorme verantwoordelijkheid, met Teacher Mastery willen we docenten ondersteunen en begeleiden op dit waardevolle pad naar zelfontwikkeling, welzijn en professionele groei.
    </p>

    <article class="intro">
        <div>
            <h2>Introductie</h2>
            <p>Coaches Joyce van Ombergen en Joost Jong hebben samen een stagebemiddelingsbureau genaamd JongLeren.es opgericht en brengen een rugzak aan ervaring en expertise met zich mee. Joyce, met een achtergrond in IT en coaching, en Joost, met ervaring als HR Manager in de retail en docent in het mbo-onderwijs, delen een passie voor persoonlijke ontwikkeling en onderwijsverbetering en zijn sinds 2008 gevestigd in het zuiden van Spanje.
            </p>
            <p class="next-paragraph">JongLeren.es heeft meer dan 1000 studenten voorzien van een stageplaats en honderden docenten ontvangen tijdens de vele onderwijsprojecten die georganiseerd zijn in de afgelopen jaren. Ook zijn tientallen docenten in opleiding voor inspiratiereizen in Málaga geweest. De vele gesprekken met docenten hebben Joost en Joyce geinspireerd tot het opzetten van teacher Mastery.</p>
        </div>
        <img src="./assets/joycejoost.jpg" alt="" class="img-joycejoost" height="1080" width="778" loading="lazy" decoding="async">
    </article>

    <article class="inhoud">
        <div>
            <h2>Inhoud Teacher Mastery</h2>
            <p>Tijdens Teacher Mastery nemen deelnemers deel aan zowel groepssessies als individuele coaching, waardoor ze kunnen profiteren van collectieve wijsheid en persoonlijke begeleiding. Een groot deel van het programma vindt plaats in een online omgeving, waardoor docenten flexibel kunnen deelnemen. Maar we geloven ook sterk in de kracht van persoonlijke ontmoetingen, daarom organiseren we twee essentiële onderdelen van ons programma in het prachtige Málaga, waar deelnemers kunnen genieten van een inspirerende omgeving.</p>
            <p class="next-paragraph">Teacher Mastery is ontworpen om docenten uit te dagen en te stimuleren. Tijdens het programma zullen deelnemers thuisopdrachten voltooien voor en na de workshops, wat een waardevolle investering in henzelf is. Na succesvolle afronding van het programma ontvangen deelnemers een certificaat dat hun prestaties en groei erkent.</p>
            <p class="next-paragraph">Bij Teacher Mastery gaat het niet alleen om het verbeteren van vaardigheden als docent, maar ook om het cultiveren van eigen welzijn en tevredenheid. Klaar om de reis te beginnen naar een gezonder, gelukkiger en zinvoller (werk)leven als docent?</p>
        </div>
        <img src="./assets/laptop.png" alt="" class="img-desktop" height="311" width="217" loading="lazy" decoding="async">
        <img src="./assets/malaga.jpg" alt="" class="img-malaga" height="225" width="325" loading="lazy" decoding="async">
    </article>
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
    }

    h2{
        padding-bottom: 1rem;
        font-family: var(--primary-font-family);
        color: var(--lightmode-text-color);
        font-weight: 500;
        font-size: var(--h2-font-size);
    }

    p{
        font-family: var(--primary-font-family);
        color: var(--lightmode-text-color);
        font-size: var(--p-font-size);
        max-width: 50rem;
    }

    .mission{
        text-align: center;
        padding-top: 2rem;
    }
    
    .mission-desktop, .img-desktop{
        display: none;
    }

    .mission-desktop, .mission-mobile{
        text-align: center;
    }

    article{
            max-width: 70rem;
            padding-top: 2rem;
        }
    
    .next-paragraph{
        padding-top: 1rem;
    }
    

    img{
        padding: 1rem 0 0 0;
    }

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {
        section{
            padding: 0 7rem;
        }

        .mission-desktop, .img-desktop{
            display: block;
        }

        .mission-desktop, .mission-mobile{
            max-width: 42rem;
        }

        article{
            display: flex;
        }

        .img-joycejoost{
            padding-left: 2rem;
        }

        .inhoud{
            flex-direction: row-reverse;
        }

        .img-desktop, .img-malaga{
            padding-right: 2rem;
        }

        .img-desktop{
            margin-left: -15rem;
            margin-top: 8rem;
        }
        
}
</style>