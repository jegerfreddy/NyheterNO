import type IArticle from "../../interfaces/IArticle";
import Article from "./Article";

interface ArticleListProps {
    articles: IArticle[];       
}

const ArticleList: React.FC<ArticleListProps> = ({articles}) => {

    const articlesTSX = articles.map((article: IArticle) => {
        return (
            <Article
                key={article.id}
                id={article.id}
                title={article.title}
                content={article.content}
                images={article.images}
                date={article.date}
            />
        )
    })

    return (
        articlesTSX
    )
}

export default ArticleList;