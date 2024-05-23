import lookupApiSlice from "./api/lookupApiSlice"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    retreat: null,
    guest: [
        { name: "Adults" },
        // { name: "Children" }
    ],
    price: {
        min: 10000,
        max: 2000000
    }
}

const lookupSlice = createSlice({
    name: 'lookup',
    initialState,
    extraReducers(builder) {
        builder.addMatcher(
            lookupApiSlice.endpoints.getRetreatType.matchFulfilled,
            (state, { payload }) => {
                state.retreat = payload
            }
        )
    }
})

export default lookupSlice.reducer;