import {RootState} from "src/store/index.tsx";

export const selectCountryModule = (state: RootState) => state.country;
export const selectCountriesWithIds = (state: RootState) => state.country.entities;
export const selectCountryIds = (state: RootState) => selectCountryModule(state).ids;
export const selectCountryById = (id: string) => (state: RootState) =>
  selectCountryModule(state).entities[id];
export const selectCountryReviewIds = (id: string) => (state: RootState) =>
  selectCountryById(id)(state)?.reviews;
export const selectCountryDateById = (id: string) => (state: RootState) =>
  selectCountryById(id)(state)?.dates;