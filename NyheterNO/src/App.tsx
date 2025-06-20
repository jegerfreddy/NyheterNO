import NavBar from './components/navbar/NavBar'
import './App.css'
import ArticleList from './components/articles/ArticleList'
import type IArticle from './interfaces/IArticle'

function App() {

  // Dummy data for articles
  const articles: IArticle[] = [
    {
      id: "1",
      title: 'Første artikkel',
      content: 'Dette er innholdet i den første artikkelen.',
      images: ['https://via.placeholder.com/150'],
      date: new Date()
    },
    {
      id: "2",
      title: 'Andre artikkel',
      content: 'Dette er innholdet i den andre artikkelen.',
      images: ['https://via.placeholder.com/150'],
      date: new Date()
    }
  ]

  return (
    <>
      <div>
        <NavBar />

        <ArticleList
          articles={articles}
        />
      </div>
    </>
  )
}

export default App
