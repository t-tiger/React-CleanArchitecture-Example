import { ApiArticles } from "./entity/article";
import ArticleDriver from "../../interface/driver/articleDriver";

export default class ArticleDriverImpl implements ArticleDriver {
  async findAll(): Promise<ApiArticles> {
    const res = await fetch("http://localhost:3000/articles");
    return await res.json();
  }
}
