import React from "react";
import ReactDOM from "react-dom";
import App from "./presenter/App";
import ArticleDriverImpl from "./driver/articleDriver";
import ArticleRepositoryImpl from "./repository/articleRepository";
import ArticleUseCaseImpl from "./useCase/articleUseCase";

const repository = new ArticleRepositoryImpl(new ArticleDriverImpl());
const useCase = new ArticleUseCaseImpl(repository);
ReactDOM.render(<App useCase={useCase} />, document.getElementById("app"));
