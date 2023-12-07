import { combineReducers, createStore, applyMiddleware } from "redux";
import { todos, isLoading } from "./todo/reducers";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {todos,
    isLoading
};

const persistconfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistconfig,rootReducer)

export const configureStore = () => createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

