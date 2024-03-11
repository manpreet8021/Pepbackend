import cityApiSlice from "./api/cityApiSlice"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    city: null
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    extraReducers(builder) {
        builder.addMatcher(
            cityApiSlice.endpoints.getTopCities.matchFulfilled,
            (state, { payload }) => {
                state.city = payload
            }
        )
    }
})

export default commonSlice.reducer;