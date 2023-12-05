import React from "react";
import ReactDOM  from "react-dom/client";
import { configureStore } from "./store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

let rootElement = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore();
const persisedStore = persistStore(store);
rootElement.render(
<Provider store={store}>
    <PersistGate persistor={persisedStore} loading={<div>Loading Data....</div>}>
    <App />
    </PersistGate>

</Provider>
);