import React from "react";
import ReactDOM  from "react-dom/client";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import App from "./App";

let rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
<Provider store={configureStore()}>
<App />
</Provider>
);