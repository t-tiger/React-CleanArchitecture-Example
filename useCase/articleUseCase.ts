import { Article } from "../domain/article";
import { ArticleUseCase } from "../interface/useCase/articleUseCase";
import ArticleRepository from "../interface/repository/articleRepository";

export default class ArticleUseCaseImpl implements ArticleUseCase {
  readonly articleRepository: ArticleRepository;

  constructor(repository: ArticleRepository) {
    this.articleRepository = repository;
  }

  async fetchArticles(): Promise<Article[]> {
    return await this.articleRepository.findAll();
  }
}
