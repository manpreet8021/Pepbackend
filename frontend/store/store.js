import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import searchSliceReducer from './slice/searchSlice';
import commonSliceReducer from './slice/commonSlice'
import authSliceReducer from "./slice/authSlice";
import { apiSlice } from "./slice/apiSlice";
import countrySliceReducer from "./slice/countrySlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, 
        hero: findPlaceSlice,
        search: searchSliceReducer,
        common: commonSliceReducer,
        auth: authSliceReducer,
        country: countrySliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
