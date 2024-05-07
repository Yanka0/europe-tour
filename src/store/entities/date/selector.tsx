import {RootState} from "src/store/index.tsx";

export const selectDateModule = (state: RootState) => state.date;
export const selectDateWithIds = (state: RootState) => state.date.entities;
export const selectDatesIds = (state: RootState) => selectDateModule(state).ids;
export const selectDateById = (id: string) => (state: RootState) =>
  selectDateModule(state).entities[id];