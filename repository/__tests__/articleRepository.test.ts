import { Article } from "../../domain/article";
import { Author } from "../../domain/author";
import ArticleDriver, {
  ArticlesJson
} from "../../interface/driver/articleDriver";
import ArticleRepositoryImpl from "../articleRepository";

class ArticleDriverMock implements ArticleDriver {
  findAll(): Promise<ArticlesJson> {
    throw "not implemented";
  }
}

describe("#findAll", () => {
  test("domain articles are returned", async () => {
    const articles: ArticlesJson = {
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
    const mock = new ArticleDriverMock();
    mock.findAll = async () => articles;
    const articleRepository = new ArticleRepositoryImpl(mock);

    expect(await articleRepository.findAll()).toEqual([
      new Article(
        1,
        "articleName",
        new Author(2, "authorName"),
        new Date("2019-01-01")
      )
    ]);
  });
});
