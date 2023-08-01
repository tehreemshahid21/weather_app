import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("name", async (cityName) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3dd2ddccf0ab6600361e28b999566fff`
  );
  const result = response.json();
  return result;
});

export const getForecast = createAsyncThunk("forecast", async ({lat,lon} ) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3dd2ddccf0ab6600361e28b999566fff`
  );
  const result = response.json();
  console.log(result);
  return result;
  
});

export const getWeather = createSlice({
  name: "weatherApi", // Corrected the property name from "user" to "name"
  initialState: {
    city: [],
    loading: false,
    error: null,
    list: [],
    numberArr: [],
  },
  reducers: {
    storeList(state,action){
      state.list.push(action.payload);
    },
    deleteCity(state, action) {
      state.list = state.list.filter((cityNam) => cityNam.id !== action.payload);
    },
    storenumber(state,action){
      state.numberArr.push(action.payload);
    },
  },
  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    [getAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const Forecast = createSlice({
  name: "forecastAPI", // Corrected the property name from "user" to "name"
  initialState: {
    Fore: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getForecast.pending]: (state) => {
      state.loading = true;
    },
    [getForecast.fulfilled]: (state, action) => {
      state.loading = false;
      state.Fore = action.payload;
    },
    [getForecast.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const weatherAction = getWeather.actions;

export default getWeather.reducer;
