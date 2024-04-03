import cityApiSlice from "./api/cityApiSlice"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    extraReducers(builder) {
       
    }
})

export default commonSlice.reducer;