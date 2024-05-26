<script>
    import { Logo, Instagram, Youtube, WhatsApp, LinkedIn } from '$lib/index.js';
    export let data;

    const hygraphData = data.pages[0];
</script>

<footer>

    <picture><Logo urlLogo="{hygraphData.header.logo.logo.url}"/></picture>

    <div class="footer-bulk">
        <ul class="teacher-mastery">
            <li><h3>Teacher Mastery</h3></li>
            <li><a href="https://www.yourjourney.academy/">YourJourney</a></li>
            <li><a href="/{hygraphData.header.program}">{hygraphData.header.program}</a></li>
            <li><a href="/{hygraphData.header.community}">{hygraphData.header.community}</a></li>
            <li><a href="/{hygraphData.header.extras}">{hygraphData.header.extras}</a></li>
            <li><a href="/{hygraphData.header.account}">{hygraphData.header.account}</a></li>
        </ul>

        <address>
            <h3>Contact</h3>
            <p>Calle Peña 21 local<br>29012 Málaga<br>Málaga, Spanje</p>
            <p>T: +34663157784</p>
            <p>E: info@yourjourney.academy</p>
            <p>KvK: 68743866</p>
        </address>
    </div>

    <div class="footer-rest">
        <img src="./assets/footer-dark.png" alt="" height="200" width="250">
        <div class="footer-rest-socials">
            <ul class="socials">
                <li><a href="https://wa.me/34627858171" aria-label="WhatsApp"><WhatsApp/></a></li>
                <li><a href="https://www.instagram.com/yourjourney.a/" aria-label="Instagram"><Instagram/></a></li>
                <li><a href="https://www.youtube.com/channel/UCtcmdIcmiUau0RwDTh4I-Gw" aria-label="Youtube"><Youtube/></a></li>
                <li><a href="https://www.linkedin.com/company/yourjourney.academy/" aria-label="LinkedIn"><LinkedIn/></a></li>
            </ul>
            <a href="https://mailchi.mp/yourjourney.academy/inschrijven-nieuwsbrief">Schrijf je in voor de nieuwsbrief & 'stay tuned'!</a>
        </div>
    </div>    

</footer>

<style>
    footer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: var(--lightmode-footer-color);
        padding: 1rem 0 0 1rem;
        font-family: var(--primary-font-family);
    }

    picture{
        margin: 0 auto;
        padding-right: 1rem;
    }

    .footer-bulk{
        display: flex;
        justify-content: space-between;
    }

    h3{
        padding-bottom: 1rem;
    }
    
    ul{
        list-style: none;
        font-size: var(--p-font-size);
    }

    li:not(:last-child){
        padding-bottom: .33rem;
    }

    address h3{
        font-style: normal;
    }

    .footer-rest{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
    }

    .socials{
        display: flex;
        justify-content: space-between;
    }

    .socials a{
        text-decoration: none;
    }

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
   
    @media  (min-width: 850px) {
        footer{
            padding: 0 10rem;
        }
    
    }
   
    @media  (min-width: 1300px) {
        footer{
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 0;
        }
    
        picture{
            margin: 0;
            padding-left: 5rem;
        }

        .footer-bulk{
            display: flex;
            justify-content: space-between;
            width: 30%;
        }
}
</style>