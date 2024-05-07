import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {CountryData, getCountries} from "src/store/entities/country/thunks/get-countries.ts";

const entityAdapter = createEntityAdapter<CountryData>()

export const countrySlice = createSlice({
  name: 'country',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getCountries.fulfilled, (state, action) => {
        entityAdapter.setAll(state, action.payload)
      })
});
export default countrySlice.reducer;
