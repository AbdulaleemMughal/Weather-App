import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weather: [],
    },
    reducers: {
        changeWeather: (state, action) => {
            state.weather = action.payload;
        },
    }
});

export const {changeWeather} = weatherSlice.actions;

export default weatherSlice.reducer;