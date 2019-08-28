import { ApiArticles } from "./entity/article";

export default class ArticleDriver {
  async findAll(): Promise<ApiArticles> {
    const res = await fetch("http://localhost:3000/articles");
    return await res.json();
  }
}
