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
        }),
        deleteRetreatImage: builder.mutation({
            query: ({id, image_id}) => ({
                url: `admin/retreat/image/${id}/${image_id}`,
                method: 'DELETE',
                credentials: 'include'
            })
        }),
        deleteRoomImage: builder.mutation({
            query: ({id, image_id}) => ({
                url: `admin/retreat/room/${id}/${image_id}`,
                method: 'DELETE',
                credentials: 'include'
            })
        }),
        getRecommendedRetreat: builder.query({
            query: () => ({
                url: 'recommended/retreat',
                credentials: 'include'
            })
        })
    })
})

export const { useGetAllRetreatQuery, useAddRetreatMutation, useUpdateRetreatMutation, useDeleteRetreatImageMutation, useDeleteRoomImageMutation, useGetRecommendedRetreatQuery } = retreatApiSlice

export default retreatApiSlice;