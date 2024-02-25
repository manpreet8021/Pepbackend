import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slice/authSlice";
import { apiSlice } from "./slice/api/apiSlice";
import countrySliceReducer from "./slice/countrySlice";
import citySliceReducer from "./slice/citySlice";
import lookupSliceReducer from "./slice/lookupSlice";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import searchSliceReducer from './slice/searchSlice';
import retreatSliceReducer from "./slice/retreatSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, 
        auth: authSliceReducer,
        hero: findPlaceSlice,
        search: searchSliceReducer,
        country: countrySliceReducer,
        city: citySliceReducer,
        lookup: lookupSliceReducer,
        retreat: retreatSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
