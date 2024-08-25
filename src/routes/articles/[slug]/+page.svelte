<script>
    import { onMount } from 'svelte';

    export let data;

    const articlesRead = JSON.parse(localStorage.getItem('articles_read')) || [];

    // it's important to wait for the markdown blog to be loaded for the page calculation height
    onMount(() => {
        window.addEventListener('scroll', function() {
            const totalHeight = document.documentElement.scrollHeight;

            const scrollPosition = window.innerHeight + window.scrollY;

            if (scrollPosition >= 0.9 * totalHeight) {
                console.log('User has reached the bottom of the page');

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