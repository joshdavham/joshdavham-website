import { loadMarkdown } from "$lib/markdown";

export function load({ params }) {
    const { slug } = params;

    const { content, metadata } = loadMarkdown(slug);

    return {
        content
    };
}