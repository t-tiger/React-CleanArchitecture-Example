import React from "react";
import { Article } from "../../domain/article";

type Props = {
  article: Article;
};

const ArticleItem = ({ article }: Props) => {
  return <div>{article.name} - {article.authorName} - {article.formattedDate}</div>;
};

export default ArticleItem;
