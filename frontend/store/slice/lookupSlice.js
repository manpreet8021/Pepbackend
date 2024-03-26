import lookupApiSlice from "./api/lookupApiSlice"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    retreat: null,
    locations: [
        {id:1, name: 'London', address: 'Greater London, UnitedKingdom'},
        {id:2, name: 'New York', address: 'New York state, United States'},
        {id:3, name: 'Paris', address: 'France'},
        {id:4, name: 'Madrid', address: 'Spain'}
    ],
    category: [],
    guest: [
        { name: "Adults" },
        { name: "Children" }
    ],
    price: {
        min: 0,
        max: 100000
    },
    category: [
        { id:1, label: "Budget", count: 92 },
        { id:2, label: "Mid-range", count: 45 },
        { id:3, label: "Luxury", count: 21 },
        { id:4, label: "Family-friendly", count: 78 },
        { id:5, label: "Business", count: 679 },
    ]
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