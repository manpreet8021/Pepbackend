import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({baseUrl: 'https://soulcation.co/api/'});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({})
})