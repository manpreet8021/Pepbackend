import userApiSlice from "./api/userApiSlice";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    userInfo: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            state.userInfo = null
        }
    },
    extraReducers(builder) {
        builder.addMatcher(
            userApiSlice.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.userInfo = payload
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.signup.matchFulfilled,
            (state, {payload}) => {
                state.userInfo = payload
            }
        )
        builder.addMatcher(
            userApiSlice.endpoints.getInfo.matchFulfilled,
            (state, {payload}) => {
                state.userInfo = payload
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.logout.matchFulfilled,
            (state, {payload}) => {
                state.userInfo = null
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.getInfo.matchRejected,
            (state, {payload}) => {
                state.userInfo = null
            }
        )
    }
})

export const { logout } = authSlice.actions

export default authSlice.reducer