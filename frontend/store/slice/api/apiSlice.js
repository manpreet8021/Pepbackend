import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../authSlice";

const baseQuery = fetchBaseQuery({baseUrl: 'http://localhost:5000/'});
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        api.dispatch(logout())
    }
    return result
  }

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({})
})