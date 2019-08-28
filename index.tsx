import React from "react";
import ReactDOM from "react-dom";
import App from "./presenter/App";
import ArticleInteractor from "./interactor/articleInteractor";
import ArticleGateway from "./gateway/articleGateway";
import ArticleDriver from "./driver/articleDriver";

const gateway = new ArticleGateway(new ArticleDriver());
const usecase = new ArticleInteractor(gateway);
ReactDOM.render(<App useCase={usecase} />, document.getElementById("app"));
