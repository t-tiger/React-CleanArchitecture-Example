import { Article } from "../../../domain/article";
import ArticlePort from "../../../interface/port/articlePort";
import ArticleInteractor from "../articleInteractor";

const articleGateway: ArticlePort = {
  findAll: (): Promise<Article[]> => {
    throw "not implemented";
  }
};

describe("#fetchArticles", () => {
  test("domain articles are returned", async () => {
    const article1 = { id: 1 } as Article;
    const article2 = { id: 2 } as Article;
    const findAllSpy = jest
      .spyOn(articleGateway, "findAll")
      .mockReturnValue(new Promise(resolve => resolve([article1, article2])));
    const articleInteractor = new ArticleInteractor(articleGateway);

    expect(await articleInteractor.fetchArticles()).toEqual([
      article1,
      article2
    ]);
    expect(findAllSpy).toHaveBeenCalledTimes(1);
    findAllSpy.mockClear();
    findAllSpy.mockReset();
  });
});
