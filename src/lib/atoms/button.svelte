<script>
    export let buttonText;
</script>

<button>
    {buttonText}
</button>

<style>
    button{
        padding: .5rem 3rem;
        background-color: var(--lightmode-accent-color);
        border: none;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    }
</style>