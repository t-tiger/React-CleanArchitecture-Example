import React, { useEffect, useState } from "react";
import Articles from "./components/Articles";
import { Article } from "../domain/article";
import { ArticleUseCase } from "../interface/useCase/articleUseCase";

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
