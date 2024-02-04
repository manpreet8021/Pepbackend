import { apiSlice } from "./apiSlice";

const countryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCountry: builder.query({
            query: () => ({
                url: 'admin/country',
                credentials: 'include'
            })
        }),
        addCountry: builder.mutation ({
            query: (data) => ({
                url: 'admin/country',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        updateCountry: builder.mutation({
            query: (data) => {
                return {
                    url: `admin/country/${data.get('id')}`,
                    method: 'PUT',
                    body: data,
                    credentials: 'include'
                }
            }
        })
    })
})

export const { useGetCountryQuery, useAddCountryMutation, useUpdateCountryMutation } = countryApiSlice;

export default countryApiSlice