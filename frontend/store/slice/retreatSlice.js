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
        ),
        builder.addMatcher(
            retreatApiSlice.endpoints.updateRetreat.matchFulfilled,
            (state, {payload}) => {
                state.data = [...state.data.filter(data => data._id !== payload[0]._id), payload[0]]
            }
        )
    }
})

export default retreatSlice.reducer