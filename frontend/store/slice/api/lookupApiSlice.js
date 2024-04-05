import { apiSlice } from "./apiSlice";

const lookupApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getRetreatType: builder.query({
            query: () => ({
                url: 'admin/lookup/retreat',
                credentials: 'include'
            })
        }),
        getLookUpByType: builder.query({
            query: (type) => ({
                url: `common/lookup/${type}`,
                credentials: 'include'
            })
        })
    })
})

export const { useGetRetreatTypeQuery, useGetLookUpByTypeQuery } = lookupApiSlice;

export default lookupApiSlice