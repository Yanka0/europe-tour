import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {countrySlice} from "src/store/entities/country/index.ts";
import {dateSlice} from "src/store/entities/date/index.ts";
import {reviewSlice} from "src/store/entities/review/index.ts";
import {userSlice} from "src/store/entities/user/index.ts";
import {requestSlice} from "src/store/ui/request/index.ts";
import {cartSlice} from "src/store/ui/cart/index.ts";
import {api} from "src/store/services/api.ts";

export const store = configureStore({
  reducer: combineSlices(
    countrySlice,
    dateSlice,
    reviewSlice,
    userSlice,
    requestSlice,
    cartSlice,
    api
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
