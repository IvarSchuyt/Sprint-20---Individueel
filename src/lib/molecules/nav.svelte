<script>
    import { NavIcon, Profile } from '$lib/index.js';

    export let titleHome, titleProgram, titleCommunity, titleExtras, titleProfile;

</script>
 
    <nav class="nav-mobile">
        <div class="dropdown">
          <details>
            <summary>
                <NavIcon />
            </summary>
              <ul class="ul-mobile">
                <li><a href="/">{titleHome}</a></li>
                <li><a href="/{titleProgram}">{titleProgram}</a></li>
                <li><a href="/{titleCommunity}">{titleCommunity}</a></li>
                <li><a href="/{titleExtras}">{titleExtras}</a></li>
                <li><a href="/{titleProfile}">{titleProfile}</a></li>
              </ul>
          </details>
        </div>
    </nav>

    <nav class="nav-desktop">
        <ul class="ul-desktop">
            <li><a href="/">{titleHome}</a></li>
            <li><a href="/{titleProgram}">{titleProgram}</a></li>
            <li><a href="/{titleCommunity}">{titleCommunity}</a></li>
            <li><a href="/{titleExtras}">{titleExtras}</a></li>
            <li class="li-last"><a href="/{titleProfile}">{titleProfile}</a></li>
            <li><a href="/{titleProfile}"><Profile /></a></li>
          </ul>
    </nav>


<style>

.nav-mobile {
    display: flex;
    justify-content: space-between;
}

summary {
    list-style: none;
}

summary::-webkit-details-marker {
  display: none; 
}

ul{
    list-style: none;
}

.ul-mobile {
    position: absolute;
    padding: 0.75em 0;
    top: 7rem;
    width: 100vw;
    left: 0;
    background: white;
}

a{
    text-decoration: none;
    color: var(--lightmode-color);
}

.ul-mobile  a {
    display: block;
    padding: 0.5rem 2rem;
    text-align: right;
}

.nav-desktop{
    display: none;

}

/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */


@media  (min-width: 850px) {
    .nav-mobile {
        display: none;
    }
    
    .nav-desktop{
        display: flex;
        align-items: center;
    }
    
    .ul-desktop {
        display: flex;
        justify-content: space-between;
        width: 42.5vw;
        align-items: center;
    }
    
}

@media  (max-width: 1100px) {
    .li-last{
        display: none;
    }
}

</style>