import ArticlePort from "../interface/port/articlePort";
import { Article } from "../domain/article";
import ArticleDriver from "../driver/articleDriver";
import { Author } from "../domain/author";

export default class ArticleGateway implements ArticlePort {
  private readonly articleDriver: ArticleDriver;

  constructor(articleDriver: ArticleDriver) {
    this.articleDriver = articleDriver;
  }

  async findAll(): Promise<Article[]> {
    const res = await this.articleDriver.findAll();
    return res.articles.map(
      articleEntity =>
        new Article(
          articleEntity.id,
          articleEntity.name,
          new Author(articleEntity.author.id, articleEntity.author.name),
          new Date(articleEntity.createdAt)
        )
    );
  }
}
