import axios from 'axios';
import type IArticle from '../interfaces/IArticle';

export const getNews = async () => {

    const apiKey = import.meta.env.VITE_API_KEY;

    try {
        const response = await axios.get("https://eventregistry.org/api/v1/article/getArticles", {
            params: {
                action: "getArticles",
                keywords: "Norway",
                articlesPage: 1,
                articlesCount: 10,
                articlesSortBy: "date",
                articlesSortByAsc: false,
                dataType: [
                    "news",
                ],
                forceMaxDataTimeWindow: 31,
                resultType: "articles",
                apiKey: apiKey, 
            }
        });

        console.log('Response received:', response.data.articles.results);
        return response.data.articles?.results || [];
        

    } catch (error) {
        console.error('Error fetching news:', error);
        return;
    }
}

export const getRSSFeed = async (feedUrl: string, sourceName: string): Promise<IArticle[]> => {
    try {

        // Here we use a proxy to avoid CORS issues when fetching the RSS feed
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`;

        const response = await axios.get(proxyUrl);
        const data = response.data;

        // Parse data recived to XML
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, 'text/xml');

        // 
        const parseError = xml.querySelector('parsererror');
        if (parseError) {
            throw new Error('Error parsing feed:\n' + parseError.textContent + "\n");
        }

        // Extract articles from the XML
        const xmlItems = xml.querySelectorAll('item');
        console.log('XML Items:', xmlItems);
        
        const articles: IArticle[] = [];

        xmlItems.forEach((item, i) => {
            const authors = item.querySelector('author')?.textContent || '';
            const title = item.querySelector('title')?.textContent || '';
            const content = item.querySelector('content')?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';

            // Extract image URL from either media:content, enclosure, or media:thumbnail
            let imageUrl = '';

            // Check for media:content
            const mediaContent = item.querySelector('content[url]');
            if (mediaContent && mediaContent.getAttribute('type')?.startsWith('image')) {
                imageUrl = mediaContent.getAttribute('url') || '';
            }

            // Check for enclosure
            if (!imageUrl) {
                const enclosure = item.querySelector('enclosure[type^="image"]');
                if (enclosure) {
                imageUrl = enclosure.getAttribute('url') || '';
                }
            }

            // Check for media:thumbnail
            if (!imageUrl) {
                const thumbnail = item.querySelector('thumbnail');
                if (thumbnail) {
                imageUrl = thumbnail.getAttribute('url') || '';
                }
            }

            // Create Article object and push to articles array
            articles.push({
                authors: authors,
                title: title,
                content: content,
                description: description,
                pubDate: pubDate,
                imageUrl: imageUrl,
                source: sourceName,
                link: link || '',
            });
        });

        return articles;

    } catch (error) {
        console.log('Error in function getRSSFeed:\n', error + "\n");
        return [];
    }
}