import React, { useEffect, useState } from "react";
import Articles from "./components/Articles";
import ArticleUseCase from "../useCase/articleUseCase";
import { Article } from "../domain/article";

type Props = {
  useCase: ArticleUseCase;
};

const App = ({ useCase }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setArticles(await useCase.fetchArticles());
  };

  return <Articles articles={articles} />;
};

export default App;
