<section>
    <div class="blob">
        <ul>
            <li><h2>Volledig programma</h2></li>
            <li>Inclusief verblijf in Málaga</li>
            <li>Inclusief gedeeld appartement met privékamer</li>
            <li>Kosten per docent: €7.000,-</li>
        </ul>
        <ul>
            <li><h2>Abonnement</h2></li>
            <li>Inclusief videocursussen</li>
            <li>Inclusief jaarlijks gesprek</li>
            <li>Kosten per maand: €25,-</li>
        </ul>
    </div>
</section>

<style>
        section{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
    
        }

        h2{
            font-family: var(--primary-font-family);
            color: var(--lightmode-text-color);
            font-weight: 500;
            font-size: var(--h2-font-size);
            padding-bottom: 1rem;
        }

        h2:last-of-type{
            padding-top: 1rem;
        }

        div{
            background: var(--lightmode-accent-color);
            border-radius: 1rem;
            padding: 1rem 2rem; 
        }

        ul{
            list-style: none;
            font-family: var(--primary-font-family);
            color: var(--lightmode-text-color);
            font-size: var(--p-font-size);
        }

        li{
            padding-bottom: 1rem;
        }

        li:last-child{
            font-weight: 600;
        }

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {
        div{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 50%;
            padding: 1rem 8rem;
        }
    }
</style>