import React from "react";
import { Article } from "../domain/article";

type Props = {
  articles: Article[];
};

const Articles = ({ articles }: Props) => {
  return (
    <ul>
      {articles.map(article => (
        <li>{article.name}</li>
      ))}
    </ul>
  );
};

export default Articles;
