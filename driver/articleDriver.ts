import ArticleDriver, { ArticlesJson } from "../interface/driver/articleDriver";

export default class ArticleDriverImpl implements ArticleDriver {
  async findAll(): Promise<ArticlesJson> {
    const res = await fetch("http://localhost:3000/articles");
    return await res.json();
  }
}
