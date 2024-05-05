const { createSlice } = require("@reduxjs/toolkit");
import retreatApiSlice from "./api/retreatApiSlice";

const initialState = {
    data: null,
    selectedRetreat: null
}

const retreatSlice = createSlice({
    name: 'retreat',
    initialState: initialState,
    reducers: {
        updateRoomDetail: (state, {payload}) => {
            state.selectedRetreat = {...state.selectedRetreat, price: payload.price, roomId: payload.roomId}
        },
        addBookingDetail: (state, {payload}) => {
            state.selectedRetreat = {...state.selectedRetreat, inDate: payload.inDate, outDate: payload.outDate, adult: payload.adult, children: payload.children}
        }
    },
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
                state.data = [...state.data, payload[0]]
            }
        ),
        builder.addMatcher(
            retreatApiSlice.endpoints.updateRetreat.matchFulfilled,
            (state, {payload}) => {
                state.data = [...state.data.filter(data => data._id !== payload[0]._id), payload[0]]
            }
        ),
        builder.addMatcher(
            retreatApiSlice.endpoints.getRetreatDetailById.matchFulfilled,
            (state, {payload}) => {
                state.selectedRetreat = payload
            }
        )
    }
})

export const { updateRoomDetail, addBookingDetail } = retreatSlice.actions

export default retreatSlice.reducer