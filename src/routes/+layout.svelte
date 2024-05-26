<script>
    import { page } from '$app/stores';
    import { Header, Footer } from '$lib/index.js';
    import { onNavigate } from '$app/navigation';
    export let data;

    onNavigate(function(navigation) {
        if (!document.startViewTransition) return;
        return new Promise(function(resolve) {
            document.startViewTransition(function() {
                resolve();
                navigation.complete;
            });
        });
    });
</script>

<Header {data} />

<slot />

<Footer {data} />
