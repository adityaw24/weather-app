import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { weatherState } from "../state";
import { baseUrl, key, pathUrl, unit } from "../../config";

const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherState,
  reducers: {
    getWeather: (state, action) => {
      state.weather = action.payload;
    },
    getLocation: (state, action) => {
      state.location = action.payload;
    },
    getReverseLocation: (state, action) => {
      state.reverseLocation = action.payload;
    },
  },
});

export const { getWeather, getLocation, getReverseLocation } =
  weatherSlice.actions;

export default weatherSlice.reducer;

// Redux Toolkit Query
export const weatherApiSlice = createApi({
  reducerPath: "weather-api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl.weather,
  }),
  endpoints: (builder) => ({
    weather: builder.query({
      query: (lat, lon) => ({
        url: `${pathUrl.weather}/onecall?lat=${lat}&lon=${lon}&units=${unit.weather}&appid=${key.api}`,
      }),
    }),
    location: builder.query({
      query: (city) => ({
        url: `${pathUrl.geolocation}/direct?q=${city}&appid=${key.api}`,
      }),
    }),
    reverseLocation: builder.query({
      query: (lat, lon) => ({
        url: `${pathUrl.geolocation}/reverse?lat=${lat}&lon=${lon}&appid=${key.api}`,
      }),
    }),
  }),
});

export const {
  useLocationQuery,
  useWeatherQuery,
  useLazyLocationQuery,
  useLazyWeatherQuery,
  useReverseLocationQuery,
  useLazyReverseLocationQuery,
} = weatherApiSlice;
