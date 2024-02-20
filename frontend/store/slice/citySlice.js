import cityApiSlice from "./api/cityApiSlice"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: null
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    extraReducers(builder) {
        builder.addMatcher(
            cityApiSlice.endpoints.getCity.matchFulfilled,
            (state, { payload }) => {
                state.data = payload
            }
        ),
        builder.addMatcher(
            cityApiSlice.endpoints.addCity.matchFulfilled,
            (state, {payload}) => {
                state.data = [...state.data, payload]
            }
        ),
        builder.addMatcher(
            cityApiSlice.endpoints.updateCity.matchFulfilled,
            (state, {payload}) => {
                state.data = [...state.data.filter(data => data._id !== payload._id), payload]
            }
        )
    }
})

export default citySlice.reducer;