import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'api/login',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: 'api/register',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        getInfo: builder.query({
            query: () => ({
                url: 'api/auth',
                credentials: 'include'
            }),
            keepUnusedDataFor: 60
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'api/logout',
                method: 'POST',
                credentials: 'include'
            })
        })
    })
})

export const { useLoginMutation, useSignupMutation, useGetInfoQuery, useLogoutMutation } = userApiSlice

export default userApiSlice