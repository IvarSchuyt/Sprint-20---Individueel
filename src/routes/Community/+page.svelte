<script>
    import { enhance } from '$app/forms'
    import { Button } from '$lib/index.js'
    export let form
    export let data;

    let loading = false

    // Custom enhancement function
    function handleForm(){
        loading = true

        return async ({ result, update }) => {
            // fake 400ms delay voor user feedback
            await setTimeout(() => {
                update()

                loading = false  
            }, 400);
        }
    }
</script>

<section>

    <h1>Programma</h1>
    <h2>Wat vonden anderen van onze service?</h2>
    <p class="p-top">Wij vinden het belangrijk dat wij iedereen zo goed, persoonlijk en efficiënt mogelijk helpen. Lees hieronder hoe andere studenten onze service hebben ervaren!</p>

    <div>
        <!-- Reviews inladen -->
        {#each data.communities as community}
            <article style="block-size: fit-content;">
                <span class="name">{community.name}</span>
                <p class="ervaring">{community.ervaring}</p>
            </article>
        {/each}
    </div>

    <!-- Enhanced form -->
    <form action="/Community" method="POST" use:enhance={handleForm}> 
        <h3>Deel jouw ervaring</h3>
        
        {#if form?.error}
            <p class="message fail">{form.message}</p>
        {/if}

        <fieldset>
            <!-- <legend>Gegevens</legend> -->
            <label><span>Naam</span> <input type="text" name="name" minlength="2" required value="{form?.name ?? ''}"  placeholder="Jan Jansen"/></label>
        </fieldset>

        <fieldset>
            <!-- <legend>Ervaring</legend> -->
            <label class="label-ervaring"><span>Voer hier je ervaring in</span> <textarea name="ervaring" rows="10" required value="{form?.ervaring ?? ''}"></textarea></label>
        </fieldset>

            <Button buttonText="Versturen" />
            {#if loading }
                <!-- Aninamtie voor custom enhancement -->
                <svg class="loader" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <style>
                        .spinner_qM83{animation:spinner_8HQG .5s infinite; fill:#66e5bf}
                        .spinner_oXPr{animation-delay:.1s}.spinner_ZTLf{animation-delay:.2s}
                        @keyframes spinner_8HQG{0%,57.14%{animation-timing-function:cubic-bezier(0.33,.66,.66,1);transform:translate(0)}28.57%{animation-timing-function:cubic-bezier(0.33,0,.66,.33);transform:translateY(-6px)}100%{transform:translate(0)}}
                    </style>
                    <circle class="spinner_qM83" cx="4" cy="12" r="3"/>
                    <circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/>
                    <circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/>
                </svg>
            {/if}
            
            <!-- Melding voor user feedback -->
            {#if form?.success}
                <p class:active={form?.success}>Bedankt voor het delen van jouw ervaring!</p>
            {/if}
    </form>

</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
    }

    .p-top{
        text-align: center;
        margin-bottom: 2rem;
    }

    article{
        padding: 1rem;
        background-color: var(--lightmode-accent-color);
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    form{
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
    }

    fieldset{
        border-style: none;
    }

    label{
        display: flex;
        flex-direction: column;
        width: 20rem;
        padding: 0 1rem 1rem 1rem;
    }
    textarea{
        resize: none;
        overflow-y: scroll;
        max-height: 10rem;
        padding: .25rem;
    }    
    

    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
    /* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

    @media  (min-width: 850px) {

        article{
            width: fit-content;
        }

    }
</style>