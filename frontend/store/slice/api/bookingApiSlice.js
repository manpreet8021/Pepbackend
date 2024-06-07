import { apiSlice } from "./apiSlice";

const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserBooking: builder.query({
            query: () => ({
                url: '/protect/user/booking',
                credentials: 'include'
            })
        }),
        getUserFavorite: builder.query({
            query: () => ({
                url: '/protect/user/favorite',
                credentials: 'include'
            })
        }),
        updateUserFavorite: builder.query({
            query: (id) => ({
                url: `/protect/user/favorite/${id}`,
                credentials: 'include'
            })
        })
    })
})

export const { useGetUserBookingQuery, useGetUserFavoriteQuery, useUpdateUserFavoriteQuery } = bookingApiSlice;

export default bookingApiSlice