import ArticlePort from "../interface/port/articlePort";
import { Article } from "../domain/article";
import { ArticleUseCase } from "../interface/useCase/articleUseCase";

export default class ArticleInteractor implements ArticleUseCase {
  readonly articlePort: ArticlePort;

  constructor(articlePort: ArticlePort) {
    this.articlePort = articlePort;
  }

  async fetchArticles(): Promise<Article[]> {
    return await this.articlePort.findAll();
  }
}
