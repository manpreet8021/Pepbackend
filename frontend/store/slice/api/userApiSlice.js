import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
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
            keepUnusedDataFor: 60
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

export const { useLoginMutation, useSignupMutation, useGetInfoMutation, useLogoutMutation } = userApiSlice

export default userApiSlice