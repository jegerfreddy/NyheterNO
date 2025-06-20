import type IArticle from "../../interfaces/IArticle";

const Article = (article: IArticle) => {

    return (
        <>
            <div key={article.id} className="article">
                <h2>{article.title}</h2>
                <p>{article.content}</p>

                {article.images && article.images.length > 0 && (
                    <img src={article.images[0]} alt="artikkel bildet" />
                )}

                <p>{article.date?.toDateString()}</p>
            </div>
        </>
    );
}

export default Article;