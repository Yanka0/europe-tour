import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  AsyncThunkAction,
  AsyncThunkConfig,
  AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator
} from "@reduxjs/toolkit/dist/createAsyncThunk";
import {RootState} from "src/store/index.tsx";
import {selectCountryReviewIds} from "src/store/entities/country/selector.tsx";
import {selectReviewsIds} from "src/store/entities/review/selector.tsx";
const API_URL = import.meta.env.VITE_API_URL;

export type Review = {
  id: string,
  userId?: string,
  name?: string,
  text: string,
  rating: number
}

export const getReviewsByCountryId: ((arg: string) => AsyncThunkAction<Review[], string, AsyncThunkConfig>) & {
  pending: AsyncThunkPendingActionCreator<string, AsyncThunkConfig>;
  rejected: AsyncThunkRejectedActionCreator<string, AsyncThunkConfig>;
  fulfilled: AsyncThunkFulfilledActionCreator<Review[], string, AsyncThunkConfig>;
  settled: (action: any) => action is ReturnType<AsyncThunkRejectedActionCreator<string, AsyncThunkConfig> | AsyncThunkFulfilledActionCreator<Review[], string, AsyncThunkConfig>>;
  typePrefix: string
} = createAsyncThunk<Review[], string, { state: RootState }>(
  'country/getReviewByCountryId',
  async (countryId) => {
    const response = await fetch(`${API_URL}/reviews?countryId=${countryId}`);
    const reviews: Review[] = await response.json()
    return reviews;
  },
  {
    condition: (countryId, {getState}) => {
      const countryReviewsIds = selectCountryReviewIds(countryId)(getState())
      const countriesIds = selectReviewsIds(getState());
      return !countryReviewsIds.every((id) => countriesIds.includes(id));
    }
  }
);
