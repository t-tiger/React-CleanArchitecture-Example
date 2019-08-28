import { ApiArticles } from "../../infra/driver/entity/article";

export default interface ArticleDriver {
  findAll(): Promise<ApiArticles>;
}
