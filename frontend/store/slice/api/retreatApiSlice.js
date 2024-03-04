const { apiSlice } = require("./apiSlice");

const retreatApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllRetreat: builder.query({
            query: () => ({
                url: 'admin/retreat/',
                credentials: 'include'
            })
        }),
        addRetreat: builder.mutation({
            query: (data) => ({
                url: 'admin/retreat',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        updateRetreat: builder.mutation({
            query: (data) => ({
                url: `admin/retreat/${data.get('id')}`,
                method: 'PUT',
                body: data,
                credentials: 'include'
            })
        })
    })
})

export const { useGetAllRetreatQuery, useAddRetreatMutation, useUpdateRetreatMutation } = retreatApiSlice

export default retreatApiSlice;