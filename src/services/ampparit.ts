import { INewsPost } from '../types';

export async function fetchNews(
  keywords: string[],
  limit: number = 60
): Promise<INewsPost[]> {
  const newsPosts: INewsPost[] = [];
  const existingTitles: string[] = [];

  for (const keyword of keywords) {
    const url = `https://www.ampparit.com/api/search?q=${keyword}&limit=${limit}`;

    const items: INewsPost[] = await (async () => {
      try {
        const request = await fetch(url);
        const json = await request.json();
        return json.data.results.items;
      } catch (e) {
        console.error('Fetch failed', e);
      }
    })();

    if (!items.length) {
      continue;
    }

    for (const item of items) {
      if (!existingTitles.includes(item.title)) {
        existingTitles.push(item.title);
        newsPosts.push(item);
      }
    }
  }

  console.log(newsPosts);
  return newsPosts.sort((a, b) => b.timestamp - a.timestamp);
}
