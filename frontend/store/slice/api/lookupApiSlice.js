import { apiSlice } from "./apiSlice";

const lookupApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRetreatType: builder.query({
            query: () => ({
                url: 'admin/lookup/valueparams/65d10cb4675106006ec49700',
                credentials: 'include'
            })
        }),
    })
})

export const { useGetRetreatTypeQuery } = lookupApiSlice;

export default lookupApiSlice