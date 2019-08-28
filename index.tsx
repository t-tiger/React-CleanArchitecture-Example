import React from "react";
import ReactDOM from "react-dom";
import App from "./presenter/App";
import ArticleInterface from "./usecase/articleInterface";

const usecase = new ArticleInterface();
ReactDOM.render(<App usecase={usecase} />, document.getElementById("app"));
