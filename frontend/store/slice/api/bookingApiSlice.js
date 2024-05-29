import { apiSlice } from "./apiSlice";

const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserBooking: builder.query({
            query: () => ({
                url: '/booking',
                credentials: 'include'
            })
        })
    })
})

export const { useGetUserBookingQuery } = bookingApiSlice;

export default bookingApiSlice