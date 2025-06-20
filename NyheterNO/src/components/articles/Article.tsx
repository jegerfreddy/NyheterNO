import type IArticle from "../../interfaces/IArticle";

const Article = (article: IArticle) => {

    return (
        <>
            <div className="article">
                <h2>{article.title}</h2>
                <p>{article.content}</p>

                <img src={article.image} alt="artikkel bildet" width={"500px"}/>
            </div>
        </>
    );
}

export default Article;