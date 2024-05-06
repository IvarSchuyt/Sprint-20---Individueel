<footer>
    <ul class="teacher-mastery">
        <li><h3>Teacher Mastery</h3></li>
        <li><a href="https://www.yourjourney.academy/">YourJourney</a></li>
        <li><a href="#">Programma</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Extra's</a></li>
        <li><a href="#">Mijn Account</a></li>
    </ul>

    <address>
        <h3>Contact</h3>
        <p>Calle Peña 21 local<br>29012 Málaga<br>Málaga, Spanje</p>
        <p>T: +34663157784</p>
        <p>E: info@yourjourney.academy</p>
        <p>KvK: 68743866</p>
    </address>

    <img src="./assets/footer-light.png" alt="decoratie" height="200" width="250">
</footer>

<style>
    footer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: auto;
        width: 100%;
        background: var(--lightmode-footer-color);
        padding: 1rem;
        font-family: var(--primary-font-family);
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
</style>