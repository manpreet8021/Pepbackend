import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    filters: {
        location: null,
        date: {
            from: null,
            to: null
        },
        guest: {
            adult: 1,
            children: null,
            room: null
        },
        propertyName: null,
        price: {
            from: null,
            to: null
        },
        companyRating: null,
        retreatRating: null,
        category: [],
        expense: null
    }
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        locationUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, location: filter.location};
        },
        dateUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, date: {from: filter.dateFrom, to:filter.dateTo}};
        },
        guestUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, guest: {adult: filter.adult, children: filter.children, room: filter.room}};
        },
        propertyNameUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, propertyName: filter.propertyName};
        },
        priceUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, price: {from: filter.from, to: filter.to}};
        },
        companyRatingUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, companyRating: filter.companyRating};
        },
        retreatRatingUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, retreatRating: filter.retreatRating};
        },
        categoryUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, category: filter.category};
        },
        expenseUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, expense: filter.expense};
        }
    }
})

export const { filterUpdate } = searchSlice.actions

export default searchSlice.reducer;