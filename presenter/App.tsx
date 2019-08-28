import React from "react";
import Articles from "./Articles";
import ArticleInterface from "../usecase/articleInterface";

type Props = {
  usecase: ArticleInterface;
};

const App = (props: Props) => {
  return <Articles articles={[]} />;
};

export default App;
