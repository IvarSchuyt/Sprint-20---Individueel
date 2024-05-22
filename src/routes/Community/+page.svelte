<script>
    import { enhance } from '$app/forms'
    export let form
    export let data;

    let loading = false

    function handleForm(){
        loading = true

        return async ({ result, update }) => {
            // fake 400ms delay for user feedback
            await setTimeout(() => {
                update()

                loading = false  
            }, 400);
        }
    }
</script>

<form action="/Community" method="POST" use:enhance={handleForm}> 
    <h2>Deel jouw ervaring</h2>
    
    {#if form?.error}
		<p class="message fail">{form.message}</p>
	{/if}

    <fieldset>
        <legend>Gegevens</legend>
        <label><span>Naam</span> <input type="text" name="name" minlength="2" required value="{form?.name ?? ''}"  placeholder="Jan Jansen"/></label>
    </fieldset>

    <fieldset>
        <legend>Ervaring</legend>
        <label><span>Voer hier je ervaring in</span> <textarea name="ervaring" rows="10" required value="{form?.ervaring ?? ''}"></textarea></label>
    </fieldset>

        <button>Versturen</button>
        {#if loading }
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

        {#if form?.success}
            <p class:active={form?.success}>Bedankt voor het delen van jouw ervaring!</p>
        {/if}
</form>

<ul>
    {#each data.communities as community}
        <li>{community.name}</li>
        <li>{community.ervaring}</li>
    {/each}
</ul>


<style>

</style>