import {AsyncThunkAction, createAsyncThunk} from "@reduxjs/toolkit";
import {
  AsyncThunkConfig,
  AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator
} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {selectCountryDateById} from "src/store/entities/country/selector.tsx";
import {selectDatesIds} from "src/store/entities/date/selector.tsx";

const API_URL = import.meta.env.VITE_API_URL;
export type Date = {
  id: string,
  name: string,
  price: string,
}

export const getDateById: ((arg: string) => AsyncThunkAction<Date, string, AsyncThunkConfig>) & {
  pending: AsyncThunkPendingActionCreator<string, AsyncThunkConfig>;
  rejected: AsyncThunkRejectedActionCreator<string, AsyncThunkConfig>;
  fulfilled: AsyncThunkFulfilledActionCreator<Date, string, AsyncThunkConfig>;
  settled: (action: any) => action is ReturnType<AsyncThunkRejectedActionCreator<string, AsyncThunkConfig> | AsyncThunkFulfilledActionCreator<Date, string, AsyncThunkConfig>>;
  typePrefix: string
} = createAsyncThunk<Date, string>(
  'country/getDateById',
  async (countryId) => {
    const response = await fetch(`${API_URL}/dates?countryId=${countryId}`);
    return await response.json();
  },
  {
    condition: (countryId, {getState}) => {
      const countryDateIds = selectCountryDateById(countryId)(getState())
      const datesIds = selectDatesIds(getState());
      return !countryDateIds.every((id) => datesIds.includes(id));
    }
  }
);
