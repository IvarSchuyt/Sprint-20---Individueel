<script>
    export let data;
	
    const hygraphData = data.pages[0];

</script>

<section>
    <h2 class="mission">{hygraphData.text.headingMission}</h2>
    <p class="mission-desktop">{hygraphData.text.pMissionDesktop}</p>
    <p class="mission-mobile">{hygraphData.text.pMissionMobile}
    </p>

    <article class="intro">
        <div>
            <h2>{hygraphData.text.headingIntro}</h2>
            <p>{hygraphData.text.pIntro1}</p>
            <p class="next-paragraph">{hygraphData.text.pIntro2}</p>
        </div>
        <img src="{hygraphData.text.imgJoyceJoost.url}" alt="" class="img-joycejoost" height="427" width="640" loading="lazy" decoding="async">
    </article>

    <article class="inhoud">
        <div>
            <h2>{hygraphData.text.headingContent}</h2>
            <p>{hygraphData.text.pContent1}</p>
            <p class="next-paragraph">{hygraphData.text.pContent2}</p>
            <p class="next-paragraph">{hygraphData.text.pContent3}</p>
        </div>
        <img src="{hygraphData.text.imgLaptop.url}" alt="" class="img-desktop" height="311" width="217" loading="lazy" decoding="async">
        <img src="{hygraphData.text.imgMalaga.url}" alt="" class="img-malaga" height="389" width="545" loading="lazy" decoding="async">
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
        font-weight: 600;
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
        display: flex;
        flex-direction: column;
    }

    .img-joycejoost, .img-malaga{
        width: 90vw;
    }

    .next-paragraph{
        padding-top: 1rem;
    }
    

    img{
        padding: 1rem 0 0 0;
        height: max-content;
    }

    .inhoud{
        margin-bottom: 2rem;
    }

    .img-desktop{
        width: 20rem;
        height: max-content;
        display: none;
    }

    @media  (min-width: 850px) {
        section{
            padding: 0 7rem;
        }

        article{
            align-items:normal;
        }

        .mission-desktop{
            display: block;
        }

        .mission-desktop, .mission-mobile{
            max-width: 42rem;
        }

        article{
            display: flex;
        }

        .intro > div{
            padding-right: 2rem;
        }

        .img-joycejoost{
            max-width: 25rem;
        }

        .img-desktop, .img-malaga{
            padding-right: 2rem;
        }

        .img-desktop{
            margin-left: -18rem;
            margin-top: 10rem;
        }

        .img-malaga{
        max-width: 25rem;
        }
        
    }

    @media  (min-width: 1150px) {
         article{
            flex-direction: row;
         }
         .inhoud{
            flex-direction: row-reverse;
         }
    }

    @media  (min-width: 1200px) {
        .img-desktop{
            display: block;
        }
    }
</style>