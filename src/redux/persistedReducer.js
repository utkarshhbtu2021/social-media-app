// redux/persistedReducer.js

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "post"], // Array of reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
