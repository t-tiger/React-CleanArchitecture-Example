import ArticlePort from "../port/articlePort";

export default class ArticleUseCase {
  readonly articlePort: ArticlePort;

  constructor(articlePort: ArticlePort) {
    this.articlePort = articlePort;
  }
}
