import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: 'auth/register',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        getInfo: builder.mutation({
            query: () => ({
                url: 'auth/auth',
                credentials: 'include'
            }),
        }),
        googleLogin: builder.mutation({
            query: (data) => ({
                url: 'auth/google',
                method: 'POST',
                body: data,
                credentials: 'include'
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                method: 'POST',
                credentials: 'include'
            })
        })
    })
})

export const { useLoginMutation, useSignupMutation, useGetInfoMutation, useLogoutMutation, useGoogleLoginMutation } = userApiSlice

export default userApiSlice