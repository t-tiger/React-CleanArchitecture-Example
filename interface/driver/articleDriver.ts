import { ArticlesJson } from "../../driver/entity/article";

export default interface ArticleDriver {
  findAll(): Promise<ArticlesJson>;
}
