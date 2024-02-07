import cityApiSlice from "./api/cityApiSlice"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: null
}

const citySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        countryData: (state, action) => {
            const payload = action.payload
            state.data = [...state.data.filter(data => data._id !== payload.data._id), payload.data]
        }
    },
    extraReducers(builder) {
        builder.addMatcher(
            cityApiSlice.endpoints.getCity.matchFulfilled,
            (state, { payload }) => {
                state.data = payload
            }
        )
    }
})

export const { countryData } = citySlice.actions

export default citySlice.reducer;