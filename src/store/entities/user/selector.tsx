import {RootState} from "src/store/index.tsx";

export const selectUserModule = (state: RootState) => state.user;
export const selectUsersWithIds = (state: RootState) => state.user.entities;
export const selectUserIds = (state: RootState) => selectUserModule(state).ids;
export const selectUserById = (id: string) => (state: RootState) =>
  selectUserModule(state).entities[id];