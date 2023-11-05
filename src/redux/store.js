import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import persistedReducer from "./persistedReducer";

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
