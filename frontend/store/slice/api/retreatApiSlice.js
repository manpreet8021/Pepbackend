const { apiSlice } = require("./apiSlice");

const retreatApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllRetreat: builder.query({
            query: () => ({
                url: 'protect/retreat/',
                credentials: 'include'
            })
        }),
        addRetreat: builder.mutation({
            query: (data) => ({
                url: 'protect/retreat',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        updateRetreat: builder.mutation({
            query: (data) => ({
                url: `protect/retreat/${data.get('id')}`,
                method: 'PUT',
                body: data,
                credentials: 'include'
            })
        }),
        deleteRetreatImage: builder.mutation({
            query: ({id, image_id}) => ({
                url: `protect/retreat/image/${id}/${image_id}`,
                method: 'DELETE',
                credentials: 'include'
            })
        }),
        deleteRoomImage: builder.mutation({
            query: ({id, image_id}) => ({
                url: `protect/retreat/room/${id}/${image_id}`,
                method: 'DELETE',
                credentials: 'include'
            })
        }),
        getRecommendedRetreat: builder.query({
            query: () => ({
                url: 'recommended/retreat',
                credentials: 'include'
            })
        }),
        getRetreatDetailById: builder.query({
            query: (id) => ({
                url: `common/retreat/${id}`,
                credentials: 'include'
            })
        }),
        getRetreatByParameter: builder.mutation({
            query: (data) => ({
                url: 'common/retreat',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        getRetreatDetailForBooking: builder.mutation({
            query: ({ data }) => ({
                url: `/protect/retreat/booking`,
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        })
    })
})

export const { useGetAllRetreatQuery, useAddRetreatMutation, useUpdateRetreatMutation, useDeleteRetreatImageMutation, useGetRetreatByParameterMutation, useDeleteRoomImageMutation, useGetRecommendedRetreatQuery, useGetRetreatDetailByIdQuery, useGetRetreatDetailForBookingMutation } = retreatApiSlice

export default retreatApiSlice;