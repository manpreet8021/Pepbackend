import { apiSlice } from "./apiSlice";

const cityApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCity: builder.query({
            query: () => ({
                url: 'admin/city',
                credentials: 'include'
            })
        }),
        addCity: builder.mutation({
            query: (data) => ({
                url: 'admin/city',
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        updateCity: builder.mutation({
            query: (data) => {
                return {
                    url: `admin/city/${data.get('id')}`,
                    method: 'PUT',
                    body: data,
                    credentials: 'include'
                }
            }
        })
    })
})

export const { useGetCityQuery, useAddCityMutation, useUpdateCityMutation } = cityApiSlice;

export default cityApiSlice