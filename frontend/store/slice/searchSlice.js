import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    location: {
        id: null,
        name: null
    },
    date: [
        new Date().toISOString(),
        new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000).toISOString()  // Adding 2 days and converting to string
    ],
    guest: {
        Adults: 1,
        Children: 0
    },
    propertyName: '',
    price: {
        min: 1000,
        max: 20000
    },
    companyRating: null,
    retreatRating: null,
    category: [],
    expense: null
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        locationUpdate: (state, action) => {
            const filter = action.payload
            state.location.id = filter?.id || null;
            state.location.name = filter?.name || null
        },
        dateUpdate: (state, action) => {
            const filter = action.payload
            console.log(filter)
            state.date = JSON.parse(filter)
        },
        guestUpdate: (state, action) => {
            const {name, value} = action.payload
            state.guest = {...state.guest, [name]:value};
        },
        propertyNameUpdate: (state, action) => {
            const filter = action.payload
            state.propertyName = filter.propertyName;
        },
        priceUpdate: (state, action) => {
            const filter = action.payload
            state.price = filter;
        },
        companyRatingUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, companyRating: filter.companyRating};
        },
        retreatRatingUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, retreatRating: filter.retreatRating};
        },
        categoryAdd: (state, action) => {
            const filter = action.payload
            state.category = [...state.category, filter];
        },
        categoryRemove: (state, action) => {
            const filter = action.payload
            state.category = state.category.filter((value) => value != filter)
        },
        expenseUpdate: (state, action) => {
            const filter = action.payload
            state.filters = {...state.filters, expense: filter.expense};
        }
    }
})

export const { locationUpdate, dateUpdate, guestUpdate, propertyNameUpdate, priceUpdate, categoryAdd, categoryRemove } = searchSlice.actions

export default searchSlice.reducer;