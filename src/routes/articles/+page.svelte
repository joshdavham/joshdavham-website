<svelte:head>
    <title>Articles</title>
</svelte:head>

<script>
    import { onMount } from 'svelte';

    export let data;

    let articlesRead = [];
    onMount(() => {
        articlesRead = JSON.parse(localStorage.getItem('articles_read')) || [];
        console.log(articlesRead);
    })

</script>

<div class="ml-2">
    <ol class="list-disc list-inside">
        {#each data.summaries as { slug, title }}
            {#if articlesRead.includes(slug)}
                <li class="line-through"><a href="/articles/{slug}">{title}</a></li>
            {:else}
                <li><a href="/articles/{slug}">{title}</a></li>
            {/if}
        {/each}
    </ol>
</div>