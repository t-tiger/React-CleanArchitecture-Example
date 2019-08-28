import { Article } from "../../domain/article";

export default interface ArticleRepository {
  findAll(): Promise<Article[]>;
}
