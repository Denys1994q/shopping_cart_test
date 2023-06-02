import { configureStore } from "@reduxjs/toolkit";
import ShopSlice from './slices/shop-slice'

const store = configureStore({
    reducer: {
        ShopSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})

export default store;