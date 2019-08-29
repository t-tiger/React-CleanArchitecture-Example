import ArticleRepository from "../interface/repository/articleRepository";
import ArticleDriver from "../interface/driver/articleDriver";
import { Article } from "../domain/article";
import { Author } from "../domain/author";

export default class ArticleRepositoryImpl implements ArticleRepository {
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
