import { configureStore } from "@reduxjs/toolkit";
import getWeather from '../features/WeatherSlice';
import {Forecast} from '../features/WeatherSlice';

export const store = configureStore({
  reducer: {
    weatherApi: getWeather, // Corrected the property name to "weatherApi"
    forecastAPI : Forecast.reducer,
  },
});
