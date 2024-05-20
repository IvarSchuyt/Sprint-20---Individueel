<script>
    import { enhance, applyAction } from '$app/forms'
    // import { onMount } from 'svelte'  
    export let form

    let loading = false

    function handleForm({formElement, formData}){
        // Voor de submit
        loading = true

        return async ({ result, update }) => {
            // fake api post
            await setTimeout(() => {
            // na de submit

                // console.log('result', result)
                update()

                loading = false  
            }, 1000);
        }
    }

    export let formObject;
    
</script>

<!-- Enhance the form with the use:enhance prop -->
<!-- Custom Enhance form with the use:enhance={handleForm} prop pointing to a custom form handler function -->
<form  action="/Community" method="POST" class="simple-text" use:enhance={handleForm}> 
    <h2>Deel jouw ervaring</h2>
    
    {#if form?.error}
		<p class="message fail">{form.message}</p>
	{/if}

    <fieldset>
        <legend>Gegevens</legend>
        <label><span class="medium-body">Naam</span> <input type="text" name="name" minlength="2" required value="{form?.name ?? ''}"  placeholder="Jan Jansen"/></label>
    </fieldset>

    <fieldset>
        <legend>Ervaring</legend>
        <label for="ervaring" class="medium-body"><span>Jouw ervaring</span></label>
        <textarea name="ervaring" rows="10" required value="{form?.ervaring ?? ''}"></textarea>
    </fieldset>

    <footer>
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
            <p class="message succes" class:active={form?.success}>Bedankt voor het delen van jouw ervaring!</p>
        {/if}
    </footer>
</form>

<style>

</style>