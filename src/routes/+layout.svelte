<script>
    import "../app.css";
</script>

<header class="mb-3 mt-3">
    <nav id="primary-nav">
        <ul>
            <li class="flex space-x-0">
                <a href="/" class="text-black hover:bg-gray-300 rounded px-1 py-2">Home</a>
                <a href="/articles" class="text-black hover:bg-gray-300 rounded px-2 py-2">Articles</a>
                <a href="/about" class="text-black hover:bg-gray-300 rounded px-2 py-2">About</a>
                <a href="/contact" class="text-black hover:bg-gray-300 rounded px-2 py-2">Contact</a>
            </li>
        </ul>
    </nav>
</header>

<style>
</style>

<slot />