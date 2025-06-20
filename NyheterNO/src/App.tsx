import NavBar from './components/navbar/NavBar'
import './App.css'
import ArticleList from './components/articles/ArticleList'
import {getNews} from './services/GetNewsService'
import { useEffect, useState } from 'react'
import type IArticle from './interfaces/IArticle'

const App = () => {	

	const [articles, setArticles] = useState<IArticle[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const data = await getNews();
				setArticles(data);
			} catch (error) {
				console.error('Error fetching articles:', error);

   		   	} finally {
				setLoading(false);
		   	}
		};

		fetchData();
	}, []);

	return (
		<>
		<div>
			<NavBar />
		   <h1>Nyheter i Norge</h1>

		   <ArticleList articles={articles} />
	
		</div>
		</>
	)
}

export default App;

