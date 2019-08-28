import React from "react";
import { Article } from "../../domain/article";
import ArticleItem from "./ArticleItem";

type Props = {
  articles: Article[];
};

const Articles = ({ articles }: Props) => {
  return (
    <>
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </>
  );
};

export default Articles;
