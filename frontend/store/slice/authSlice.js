import { createSlice } from "@reduxjs/toolkit";
import userApiSlice from "./api/userApiSlice";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    },
    extraReducers(builder) {
        builder.addMatcher(
            userApiSlice.endpoints.login.matchFulfilled || userApiSlice.endpoints.signup.matchFulfilled || userApiSlice.endpoints.getInfo.matchFulfilled,
            (state, { payload }) => {
                state.userInfo = payload
                localStorage.setItem('userInfo', JSON.stringify(payload))
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.logout.matchFulfilled || userApiSlice.endpoints.getInfo.matchRejected,
            (state, {payload}) => {
                state.userInfo = null
                localStorage.removeItem('userInfo')
            }
        )
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer