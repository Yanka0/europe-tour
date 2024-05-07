import {createAsyncThunk} from "@reduxjs/toolkit";
const API_URL = import.meta.env.VITE_API_URL;
export type CountryData = {
  id: string,
  name: string,
  title: string,
  duration: string,
  countries: string,
  waypoints: [{
    lat: number,
    lng: number
  }]
  description: string,
  program: [{
    title: string,
    plan: string[]
  }]
  imgs: {
    flag: string,
    mainImg: string,
    sliderImgs: string[]
  },
  dates: string[],
  reviews: string[]
}
export const getCountries = createAsyncThunk<CountryData[], void>(
  'country/getCountries',
  async () => {
    const response = await fetch(`${API_URL}/countries`);
    return await response.json();
  });
