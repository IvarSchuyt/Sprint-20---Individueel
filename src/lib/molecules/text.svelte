<script>
    export let headingMission, pMissionDesktop, pMissionMobile, headingIntro, pIntro1, pIntro2, imgJoyceJoost, headingContent, pContent1, pContent2, pContent3, imgLaptop, imgMalaga;
</script>

<section>
    <h2 class="mission">{headingMission}</h2>
    <p class="mission-desktop">{pMissionDesktop}</p>
    <p class="mission-mobile">{pMissionMobile}
    </p>

    <article class="intro">
        <div>
            <h2>{headingIntro}</h2>
            <p>{pIntro1}</p>
            <p class="next-paragraph">{pIntro2}</p>
        </div>
        <img src="{imgJoyceJoost}" alt="" class="img-joycejoost" height="427" width="640" loading="lazy" decoding="async">
    </article>

    <article class="inhoud">
        <div>
            <h2>{headingContent}</h2>
            <p>{pContent1}</p>
            <p class="next-paragraph">{pContent2}</p>
            <p class="next-paragraph">{pContent3}</p>
        </div>
        <img src="{imgLaptop}" alt="" class="img-desktop" height="311" width="217" loading="lazy" decoding="async">
        <img src="{imgMalaga}" alt="" class="img-malaga" height="389" width="545" loading="lazy" decoding="async">
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

    .img-joycejoost{
        width: 20rem;
        height: auto;
    }
    
    .next-paragraph{
        padding-top: 1rem;
    }
    

    img{
        padding: 1rem 0 0 0;
    }

    .img-desktop{
        width: 20rem;
        height: auto;
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