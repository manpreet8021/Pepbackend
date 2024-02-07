import countryApiSlice from "./api/countryApiSlice";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: null
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    extraReducers(builder) {
        builder.addMatcher(
            countryApiSlice.endpoints.getCountry.matchFulfilled,
            (state, { payload }) => {
                state.data = payload
            }
        ),
        builder.addMatcher(
            countryApiSlice.endpoints.addCountry.matchFulfilled,
            (state, { payload }) => {
                state.data = [...state.data, payload]
            }
        ),
        builder.addMatcher(
            countryApiSlice.endpoints.updateCountry.matchFulfilled,
            (state, { payload }) => {
                state.data = [...state.data.filter(data => data._id !== payload._id), payload]
            }
        )
    }
})

export const { countryData } = countrySlice.actions

export default countrySlice.reducer;