import { Article } from "../../domain/article";

export interface ArticleUseCase {
  fetchArticles(): Promise<Article[]>;
}
