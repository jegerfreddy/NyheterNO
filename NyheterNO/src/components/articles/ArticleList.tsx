import type IArticle from "../../interfaces/IArticle";
import Article from "./Article";

interface ArticleListProps {
    articles: IArticle[];       
}

const ArticleList: React.FC<ArticleListProps> = ({articles}) => {

    const articlesTSX = articles.map((article: IArticle, i) => {
        return (
            <Article
                key={"article" + i}
                authors={article.authors}
                title={article.title}
                content={article.content}
                description={article.description}
                pubDate={article.pubDate}
                imageUrl={article.imageUrl}
                source={article.source}
                link={article.link}
            />
        )
    })

    return (
        articlesTSX
    )
}

export default ArticleList;