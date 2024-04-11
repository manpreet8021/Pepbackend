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
            localStorage.removeItem("userInfo")
            state.userInfo = null
        },
        setToken: (state, action) => {
            state.userInfo = action.payload
        }
    },
    extraReducers(builder) {
        builder.addMatcher(
            userApiSlice.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                localStorage.setItem("userInfo", JSON.stringify(payload))
                state.userInfo = payload
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.signup.matchFulfilled,
            (state, {payload}) => {
                localStorage.setItem("userInfo", JSON.stringify(payload))
                state.userInfo = payload
            }
        )
        builder.addMatcher(
            userApiSlice.endpoints.getInfo.matchFulfilled,
            (state, {payload}) => {
                localStorage.setItem("userInfo", JSON.stringify(payload))
                state.userInfo = payload
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.logout.matchFulfilled,
            (state, {payload}) => {
                localStorage.removeItem("userInfo")
                state.userInfo = null
            }
        ),
        builder.addMatcher(
            userApiSlice.endpoints.getInfo.matchRejected,
            (state, {payload}) => {
                localStorage.setItem("userInfo")
                state.userInfo = null
            }
        )
    }
})

export const { logout, setToken } = authSlice.actions

export default authSlice.reducer