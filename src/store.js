import { combineReducers, createStore } from "redux";
import { todos } from "./todo/reducers";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = {todos};

const persistconfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistconfig,rootReducer)

export const configureStore = () => createStore(persistedReducer, window.__REDUX_DEVOOLS_EXTENSION__ && window.__REDUX_DEVOOLS_EXTENSION__());

