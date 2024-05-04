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
        border-radius: .25rem;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    }

    button:hover{
        cursor: pointer;
    }

    button:active{
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.175);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.175);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.175);
        scale: .99;
    }
</style>