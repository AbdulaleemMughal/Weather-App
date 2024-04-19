import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

const appStore = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default appStore;