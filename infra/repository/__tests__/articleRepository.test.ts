import { Article } from "../../../domain/article";
import { Author } from "../../../domain/author";
import { ApiArticles } from "../../driver/entity/article";
import ArticleDriver from "../../../interface/driver/articleDriver";
import ArticleRepositoryImpl from "../articleRepository";

const articleDriver: ArticleDriver = {
  findAll: (): Promise<ApiArticles> => {
    throw "not implemented";
  }
};

describe("#findAll", () => {
  test("domain articles are returned", async () => {
    const articles: ApiArticles = {
      articles: [
        {
          id: 1,
          name: "articleName",
          author: {
            id: 2,
            name: "authorName"
          },
          createdAt: "2019-01-01T00:00:00.000Z"
        }
      ]
    };
    const findAllSpy = jest
      .spyOn(articleDriver, "findAll")
      .mockReturnValue(new Promise(resolve => resolve(articles)));
    const articleRepository = new ArticleRepositoryImpl(articleDriver);

    expect(await articleRepository.findAll()).toEqual([
      new Article(
        1,
        "articleName",
        new Author(2, "authorName"),
        new Date("2019-01-01")
      )
    ]);
    expect(findAllSpy).toHaveBeenCalledTimes(1);
    findAllSpy.mockClear();
    findAllSpy.mockReset();
  });
});
