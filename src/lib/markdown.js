import fs from 'fs';
import path from 'path';
import markdownit from 'markdown-it';
import matter from 'gray-matter';

const md = markdownit({
    html: true, // this ensures that any html tags in the markdown is rendered as is
});

export function loadMarkdown(slug) {
    const fullPath = path.join(process.cwd(), 'src/articles', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the front matter
    const { content, data } = matter(fileContents);
    
    //console.log(data);
    

    const renderedHTML = md.render(content);

    //console.log(renderedHTML);

    return {
        content: renderedHTML,
        metadata: data
    }
}