import { configureStore } from "@reduxjs/toolkit";
import weatherSlice, { weatherApiSlice } from "../slice/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(weatherApiSlice.middleware);
  },
});

// export const dispatch = store.dispatch

export const rootState = store.getState;
