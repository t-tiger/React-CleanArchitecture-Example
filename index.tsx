import React from "react";
import ReactDOM from "react-dom";
import App from "./presenter/App";
import ArticleDriverImpl from "./infra/driver/articleDriver";
import ArticleRepositoryImpl from "./infra/repository/articleRepository";
import ArticleUseCaseImpl from "./infra/usecase/articleUseCase";

const repository = new ArticleRepositoryImpl(new ArticleDriverImpl());
const useCase = new ArticleUseCaseImpl(repository);
ReactDOM.render(<App useCase={useCase} />, document.getElementById("app"));
