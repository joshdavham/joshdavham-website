import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function load() {

    const fullPath = path.join(process.cwd(), 'src/articles');
    
    const files = fs.readdirSync (fullPath);

    const mdFiles = files.filter(file => path.extname(file) === '.md');

    let summaries = [];
    for (const mdFile of mdFiles) {
        const filePath = path.join(fullPath, mdFile);

        const fileContents = fs.readFileSync(filePath, 'utf8');

        const { content, data } = matter(fileContents);

        const title = data.title;
        const slug = data.slug;
        const order = data.order;

        summaries.push({title: title, slug: slug, order: order});
    }

    summaries.sort((a, b) => b.order - a.order);

    return {
        summaries: summaries
    }

}