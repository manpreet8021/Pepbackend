import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({baseUrl: 'https://pepbackend.onrender.com/api/'});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({})
})