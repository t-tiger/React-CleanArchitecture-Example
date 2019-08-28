import { ArticleEntity } from "./entity/article";

export default class ArticleDriver {
  async findAll(): Promise<ArticleEntity[]> {
    // TODO baseURL using environment file
    const res = await fetch("http://localhost:3000/articles");
    return await res.json();
  }
}
