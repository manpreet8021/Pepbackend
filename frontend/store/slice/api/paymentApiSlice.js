import { apiSlice } from "./apiSlice";

const paymentAPiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data) => ({
                url: 'protect/payment/createOrder',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        paymentVerify: builder.mutation({
            query: (data) => ({
                url: 'protect/payment/paymentVerified',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        getBookingDetail: builder.query({
            query: (id) => ({
                url: `protect/payment/getBookingDetail/${id}`,
                credentials: 'include'
            })
        })
    })
})

export const { useCreateOrderMutation, usePaymentVerifyMutation, useGetBookingDetailQuery } = paymentAPiSlice

export default paymentAPiSlice