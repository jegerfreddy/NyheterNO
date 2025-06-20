export default interface IArticle {
    id: string;
    title: string;
    content: string;
    images: string[];
    date: Date | null;
}