const { createSlice } = require("@reduxjs/toolkit");
import retreatApiSlice from "./api/retreatApiSlice";

const initialState = {
    data: null
}

const retreatSlice = createSlice({
    name: 'retreat',
    initialState: initialState,
    extraReducers(builder) {
        builder.addMatcher(
            retreatApiSlice.endpoints.getAllRetreat.matchFulfilled,
            (state, {payload}) => {
                state.data = payload
            }
        ),
        builder.addMatcher(
            retreatApiSlice.endpoints.addRetreat.matchFulfilled,
            (state, {payload}) => {
                state.data = [...state.data, payload]
            }
        )
    }
})

export default retreatSlice.reducer