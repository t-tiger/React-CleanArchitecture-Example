import ArticlePort from "../port/articlePort";
import { Article } from "../domain/article";

export default class ArticleUseCase {
  readonly articlePort: ArticlePort;

  constructor(articlePort: ArticlePort) {
    this.articlePort = articlePort;
  }

  async fetchArticles(): Promise<Article[]> {
    return await this.articlePort.findAll();
  }
}
