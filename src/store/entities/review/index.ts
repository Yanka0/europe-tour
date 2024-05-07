import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviewsByCountryId, Review} from "src/store/entities/review/thunks/get-reviews-by-country-id.ts";

const entityAdapter = createEntityAdapter<Review>()

export const reviewSlice = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByCountryId.fulfilled, (state, action) => {
        entityAdapter.setMany(state, action.payload)
      })
});
export default reviewSlice.reducer;
