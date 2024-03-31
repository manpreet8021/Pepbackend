import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    show: false,
    header: 'Default Header',
    body: 'Default Body',
    type: 'secondary'
}

const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast: (state, action) => {
            const data = action.payload
            state.header = data.header;
            state.body = data.body;
            state.type = data.type;
            state.show = true;
        },
        closeToast: (state, action) => {
            state.show = false
        }
    }
})

export const { showToast, closeToast } = toastSlice.actions

export default toastSlice.reducer;