import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// CRUD
// Read -> get -> query
// CUD - post, put, delete - mutation
export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67ac6f165853dfff53daaf48.mockapi.io' }),
  endpoints: () => ({}),
  tagTypes: ["BLOG", "PRODUCT"]
})
