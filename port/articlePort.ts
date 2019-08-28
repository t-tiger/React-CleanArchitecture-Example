import { Article } from "../domain/article";

export default interface ArticlePort {
  findAll(): Promise<Article[]>;
}
