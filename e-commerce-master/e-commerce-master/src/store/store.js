import { createStore , applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";


const persistconfig = {
    key: "root",
    storage,
    whilelist: ["cart"]
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistconfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

const composedEnhancer = compose(applyMiddleware(... middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);