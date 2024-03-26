import { apiSlice } from "./apiSlice";

const lookupApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRetreatType: builder.query({
            query: () => ({
                url: 'admin/lookup/retreat',
                credentials: 'include'
            })
        }),
    })
})

export const { useGetRetreatTypeQuery } = lookupApiSlice;

export default lookupApiSlice