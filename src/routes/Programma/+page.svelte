<script>
    import { Button } from '$lib/index.js';

    export let data;
    const hygraphData = data.programmas[0].program;
</script>

<section>
    <div class="page-left">
        <h1>Programma</h1>

        {#each hygraphData.stepProgram as step, i}
            <h2 tabindex="0">{step}</h2>
            <p>{hygraphData.descriptionProgram[i]}</p>
        {/each}
    </div>
    <div class="page-right">
        <div>
            <h3>{hygraphData.attendanceBlob.headingBlob}</h3>
            <p>{hygraphData.attendanceBlob.textBlob}</p>
        </div>
        <div>
            <h3>{hygraphData.blobContact.headingBlob}</h3>
            <p>{hygraphData.blobContact.textBlob}</p>
            <p>{hygraphData.blobContact.lineBlob}</p>
            <ul>
                <li>{hygraphData.blobContact.emailBlob[0]}</li>
                <li>{hygraphData.blobContact.emailBlob[1]}</li>
                <li>{hygraphData.blobContact.emailBlob[2]}</li>
            </ul>
            <Button buttonText="Download het volledige programma" />
        </div>
    </div>
</section>

<style>
    section{
        display: flex;
        justify-content: space-between;
    }

    .page-left p{
        display: none;
    }

    h2:focus + p, h2:hover + p{
        display: block;
    }
</style>