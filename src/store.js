import { createStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ProductReducer from "./Reducers/ProductReducer";
import UserReducer from "./Reducers/UserReducer";
import {thunk} from "redux-thunk";
import AuthReducer from "./Reducers/AuthReducer";
import CartReducer from "./Reducers/CartReducer";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    products: ProductReducer,
    users: UserReducer,
    auth: AuthReducer,
    cart: CartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);