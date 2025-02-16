import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getCar: build.query({
      query: (params) => ({
        url:'/Cars',
        method:"GET",
        params
      }),
      providesTags: ["CARS"]
    }),
    getSingleCar: build.query({
      query: (id)=> ({
        url: `/Cars/${id}`,
        method:"GET"
      }),
      providesTags: ["CARS"]
    }),
    createCar: build.mutation({
      query: (body)=> ({
        url:"/Cars",
        method: "POST",
        body
      }),
      invalidatesTags: ["CARS"]
    }),
    deleteCar: build.mutation({
      query: (id)=> ({
        url: `/Cars/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["CARS"]
    }),
    updateCar: build.mutation({
      query: ({id, body})=> ({
        url: `/Cars/${id}`,
        method:"PUT",
        body
      }),
      invalidatesTags: ["CARS"]
    })
  }),
  overrideExisting: false,
})

export const { useGetCarQuery, useCreateCarMutation, useDeleteCarMutation, useUpdateCarMutation, useGetSingleCarQuery } = extendedApi