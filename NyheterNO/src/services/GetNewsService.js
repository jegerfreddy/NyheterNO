const GetNewsService = {

    async getNews() {
        axios.get("https://eventregistry.org/api/v1/article/getArticles", {
            "action": "getArticles",
            //"keywords": "Norway",
            "articlesPage": 1,
            "articlesCount": 10,
            "articlesSortBy": "date",
            "articlesSortByAsc": false,
            "dataType": [
                "news",
            ],
            "forceMaxDataTimeWindow": 31,
            "resultType": "articles",
            "apiKey": ""
        })
    }

}