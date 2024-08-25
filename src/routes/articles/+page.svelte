<svelte:head>
    <title>Articles</title>
</svelte:head>

<script>
    export let data;
</script>

<div class="ml-2">
    <ol class="list-disc list-inside">
        {#each data.summaries as {slug, title }}
            <li><a href="/articles/{slug}">{title}</a></li>
        {/each}
    </ol>
</div>