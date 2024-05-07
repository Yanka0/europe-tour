import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CountryData} from "src/store/entities/country/thunks/get-countries.ts";
import {Review} from "src/store/entities/review/thunks/get-reviews-by-country-id.ts";
import {Date} from "src/store/entities/date/thunks/get-date-by-id.ts";

const API_URL = import.meta.env.VITE_API_URL;
type TagType = "Review" | "Country";
const tagTypes: TagType[] = ["Review", "Country"];
export const api = createApi({
  reducerPath: 'api',
  tagTypes,
  baseQuery: fetchBaseQuery({baseUrl: `${API_URL}/`}),
  endpoints: builder => ({
    getCountries: builder.query<CountryData[], string>({
      query: (language) => ({
        url: 'countries',
        params: {language}
      }),
    }),
    getDatesByCountryId: builder.query<Date[], string>({
      query: (countryId) => ({
        url: `dates`,
        params: {countryId}
      }),
    }),
    getDateById: builder.query<Date, string>({
      query: (dateId) => ({
        url: `date/${dateId}`,
      }),
    }),
    getReviewsByCountryId: builder.query<Review[], string>({
      query: (countryId) => ({
        url: `reviews`,
        params: {countryId}
      }),
      providesTags: (result, _, countryId) =>
        result ?
          result
            .map(({id}) => ({type: "Review" as TagType, id}))
            .concat(
              {type: "Review", id: "All"},
              {type: "Country", id: countryId}
            ) : ['Review'],
    }),
    createReview: builder.mutation({
      query: ({countryId, newReview}) => ({
        url: `review/${countryId}`,
        method: 'POST',
        body: newReview
      }),
      invalidatesTags: (result, _, {countryId}) => [{
        type: 'Country',
        id: countryId
      }]
    }),
    updateReview: builder.mutation({
      query: ({reviewId, editReview}) => ({
        url: `review/${reviewId}`,
        method: 'PATCH',
        body: editReview
      }),
      invalidatesTags: (result, _, {reviewId}) => [{
        type: 'Review',
        id: reviewId
      }]
    }),

  }),
})
export const {
  useGetDatesByCountryIdQuery,
  useGetReviewsByCountryIdQuery,
  useGetCountriesQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useGetDateByIdQuery
} = api