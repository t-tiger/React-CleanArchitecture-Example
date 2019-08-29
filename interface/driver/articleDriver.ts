export default interface ArticleDriver {
  findAll(): Promise<ArticlesJson>;
}

export type ArticlesJson = {
  articles: ArticleJson[];
};

export type ArticleJson = {
  id: number;
  name: string;
  author: {
    id: number;
    name: string;
  };
  createdAt: string;
};
