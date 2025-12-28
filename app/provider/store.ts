import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cart-slice";
import userReducer from "./features/user-slice";
import themeReducer from "./features/theme-slice";
import currencyReducer from "./features/currency-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "theme", "currency"], // Persist cart, theme, and currency settings
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: userReducer,
  theme: themeReducer,
  currency: currencyReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
