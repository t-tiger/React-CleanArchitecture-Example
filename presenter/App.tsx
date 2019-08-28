import React, { useEffect, useState } from "react";
import Articles from "./Articles";
import ArticleUseCase from "../useCase/articleUseCase";
import { Article } from "../domain/article";

type Props = {
  useCase: ArticleUseCase;
};

const App = (props: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {}, []);
  return <Articles articles={articles} />;
};

export default App;
