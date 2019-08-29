import { Article } from "../../domain/article";
import ArticleRepository from "../../interface/repository/articleRepository";
import ArticleUseCaseImpl from "../articleUseCase";

const articleRepository: ArticleRepository = {
  findAll: (): Promise<Article[]> => {
    throw "not implemented";
  }
};

describe("#fetchArticles", () => {
  test("domain articles are returned", async () => {
    const article1 = { id: 1 } as Article;
    const article2 = { id: 2 } as Article;
    const findAllSpy = jest
      .spyOn(articleRepository, "findAll")
      .mockReturnValue(new Promise(resolve => resolve([article1, article2])));
    const articleUseCase = new ArticleUseCaseImpl(articleRepository);

    expect(await articleUseCase.fetchArticles()).toEqual([article1, article2]);
    expect(findAllSpy).toHaveBeenCalledTimes(1);
    findAllSpy.mockClear();
    findAllSpy.mockReset();
  });
});
