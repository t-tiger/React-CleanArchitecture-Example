import React from "react";
import ReactDOM from "react-dom";
import App from "./presenter/App";
import ArticleInteractor from "./infra/interactor/articleInteractor";
import ArticleGateway from "./infra/gateway/articleGateway";
import ArticleDriverImpl from "./infra/driver/articleDriver";

const gateway = new ArticleGateway(new ArticleDriverImpl());
const useCase = new ArticleInteractor(gateway);
ReactDOM.render(<App useCase={useCase} />, document.getElementById("app"));
