import { persistReducer, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import employeeReducer from "../features/employeeSlice";

const { configureStore, combineReducers } = require("@reduxjs/toolkit");


const reducers = combineReducers({
  employee: employeeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [REGISTER],
      },
    }),
});

export default store