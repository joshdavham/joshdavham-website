<svelte:head>
    <title>Articles</title>
</svelte:head>

<script>
    export let data;
</script>

<ol>
    {#each data.summaries as {slug, title }}
        <li><a href="/articles/{slug}">{title}</a></li>
    {/each}
</ol>