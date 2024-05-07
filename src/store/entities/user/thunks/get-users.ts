import {createAsyncThunk} from "@reduxjs/toolkit";
const API_URL = import.meta.env.VITE_API_URL;
export type User = {
  id: string,
  name: string,
}
export const getUsers = createAsyncThunk<User[], void>(
  'country/getUser',
  async () => {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
  });
