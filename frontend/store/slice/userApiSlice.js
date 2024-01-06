import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'api/login',
                method: 'POST',
                body: data
            })
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: 'api/register',
                method: 'POST',
                body: data
            })
        }),
        getInfo: builder.mutation({
            query: () => ({
                url: 'api/auth'
            }),
            keepUnusedDataFor: 60
        })
    })
})

export const { useLoginMutation, useSignupMutation, useGetInfoMutation } = userApiSlice