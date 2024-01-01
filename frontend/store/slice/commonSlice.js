import {createSlice} from '@reduxjs/toolkit'

const initialState = {
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
    ]
}

const commonSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        commonReducer: (state, action) => {
            const filter = action.payload
            state.filters = [...state.filters, filter];
        }
    }
})

export default commonSlice.reducer;