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
        updateUserFavorite: builder.mutation({
            query: (data) => ({
                url: `/protect/user/favorite/`,
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        })
    })
})

export const { useGetUserBookingQuery, useGetUserFavoriteQuery, useUpdateUserFavoriteMutation } = bookingApiSlice;

export default bookingApiSlice