import { apiSlice } from "./apiSlice";

const countryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCountry: builder.query({
            query: () => ({
                url: 'admin/country',
                credentials: 'include'
            })
        })
    })
})

export const { useGetCountryQuery } = countryApiSlice;
