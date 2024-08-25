<script>
    import { onMount } from 'svelte';

    export let data;

    // it's important to wait for the markdown blog to be loaded for the page calculation height
    // also important for acessing local storage
    onMount(() => {

        const articlesRead = JSON.parse(localStorage.getItem('articles_read')) || [];

        window.addEventListener('scroll', function() {
            const totalHeight = document.documentElement.scrollHeight;

            const scrollPosition = window.innerHeight + window.scrollY;

            if (scrollPosition >= 0.9 * totalHeight) {

                if (!articlesRead.includes(data.metadata.slug)) {
                    articlesRead.push(data.metadata.slug);
                    this.localStorage.setItem('articles_read', JSON.stringify(articlesRead));
                }

            }
        })
    });
</script>

<div class="markdown-content prose mb-8">
    {@html data.content}
</div>

<style>
</style>