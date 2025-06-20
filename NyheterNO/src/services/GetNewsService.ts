import axios from 'axios';

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