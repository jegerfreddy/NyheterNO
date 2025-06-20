export default interface IArticle {
    authors: string[];
    title: string;
    content: string;
    image: string;
    date: Date | null;
    source: string;
}