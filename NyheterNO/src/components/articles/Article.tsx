import type IArticle from "../../interfaces/IArticle";

const Article = (article: IArticle) => {

    return (
        <>
            <div className="article">
                <h2>
                    <strong>{article.title}</strong>
                </h2>
                <p>{article.content}</p>

                <div className="description-container">
                    <p>{article.description}</p>
                </div>

                <p>
                    {article.source + ": "}
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        {article.link}
                    </a>
                </p>

                { article.imageUrl && (
                    <img src={article.imageUrl} alt="artikkel bildet" width={"500px"}/>
                )}
            </div>
        </>
    );
}

export default Article;