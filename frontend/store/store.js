import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import searchSliceReducer from './slice/searchSlice';
import commonSlice from './slice/commonSlice'

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        search: searchSliceReducer,
        common: commonSlice
    },
    devTools: true
});
