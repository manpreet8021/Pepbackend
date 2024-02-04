import { createSlice } from "@reduxjs/toolkit";
import userApiSlice from "./api/userApiSlice";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers(builder) {
        builder.addMatcher(
            userApiSlice.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.userInfo = payload
                localStorage.setItem('userInfo', JSON.stringify(payload))
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.signup.matchFulfilled,
            (state, {payload}) => {
                state.userInfo = payload
                localStorage.setItem('userInfo', JSON.stringify(payload))
            }
        )
    }
})

export default authSlice.reducer