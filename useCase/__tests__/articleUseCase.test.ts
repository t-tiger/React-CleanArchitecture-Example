import { Article } from "../../domain/article";
import ArticleRepository from "../../interface/repository/articleRepository";
import ArticleUseCaseImpl from "../articleUseCase";

class ArticleRepositoryMock implements ArticleRepository {
  findAll(): Promise<Article[]> {
    throw "not implemented";
  }
}

describe("#fetchArticles", () => {
  test("domain articles are returned", async () => {
    const article1 = { id: 1 } as Article;
    const article2 = { id: 2 } as Article;

    const mock = new ArticleRepositoryMock();
    mock.findAll = async () => [article1, article2];

    const articleUseCase = new ArticleUseCaseImpl(mock);
    expect(await articleUseCase.fetchArticles()).toEqual([article1, article2]);
  });
});
