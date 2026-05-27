import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: any) {
    return rss({
        title: 'randomchaffee | My Astro Blog',
        description: 'My short stint learning Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-ph</language>`
    });
}