import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'api/auth/login',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useLoginMutation} = userApiSlice