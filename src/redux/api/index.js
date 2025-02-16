import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// CRUD
// Read -> get -> query
// CUD - post, put, delete - mutation
export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67ac718b5853dfff53daba71.mockapi.io' }),
  endpoints: () => ({}),
  tagTypes: ["CARS"]
})
