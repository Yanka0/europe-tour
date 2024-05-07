import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {Date, getDateById} from "src/store/entities/date/thunks/get-date-by-id.ts";

const entityAdapter = createEntityAdapter<Date>()


export const dateSlice = createSlice({
  name: 'date',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getDateById.fulfilled, (state, action) => {
        entityAdapter.setMany(state, action.payload)
      })
});
export default dateSlice.reducer;
