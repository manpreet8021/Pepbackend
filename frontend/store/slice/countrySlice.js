import countryApiSlice from "./api/countryApiSlice";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    data: null
}

const countrySlice = createSlice({
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
            countryApiSlice.endpoints.getCountry.matchFulfilled,
            (state, { payload }) => {
                state.data = payload
            }
        )
    }
})

export const { countryData } = countrySlice.actions

export default countrySlice.reducer;