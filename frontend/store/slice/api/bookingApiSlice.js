import { apiSlice } from "./apiSlice";

const bookingApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserBooking: builder.query({
            query: () => ({
                url: '/protect/booking',
                credentials: 'include'
            })
        })
    })
})

export const { useGetUserBookingQuery } = bookingApiSlice;

export default bookingApiSlice