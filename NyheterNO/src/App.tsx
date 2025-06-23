import NavBar from './components/navbar/NavBar'
import './App.css'
import ArticleList from './components/articles/ArticleList'
import { getNews, getRSSFeed } from './services/GetNewsService'
import { useEffect, useState } from 'react'
import type IArticle from './interfaces/IArticle'

const App = () => {	

	const [articles, setArticles] = useState<IArticle[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const rssFeeds = [
		{
			url: "https://www.nrk.no/nyheter/siste.rss",
			sourceName: "NRK Nyheter",
		},
	]


	const fetchData = async () => {
		setLoading(true);

		try {
			rssFeeds.forEach(async (feed) => {
				const data = await getRSSFeed(feed.url, feed.sourceName);
				if (data && data.length > 0) {
					setArticles(data);
				}
			});

		} catch (error) {
			setArticles([]);

		} finally {
			setLoading(false);
		}
	};


	useEffect(() => {
		fetchData();
	}, []);


	return (
		<>
			<div className='d-flex flex-column align-item-center min-vh-100'>

				<NavBar />

				<h1>Artikkeler</h1>

				<div className="articleListContainer">
					<ArticleList articles={articles} />
				</div>
		
			</div>
		</>
	)
}

export default App;

