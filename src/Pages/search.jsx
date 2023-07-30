import React, { useEffect } from "react";
import "./search.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../features/WeatherSlice";
import { useState } from "react";
import { getForecast } from "../features/WeatherSlice";
import { weatherAction } from "../features/WeatherSlice";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.weatherApi.city;
  });

  const dataa = useSelector((state) => {
    return state.forecastAPI.Fore;
  });


  const HandleSearch = () => {
    dispatch(getAllData(search))
      .then(() => {
        setSearch(""); // Clear the search input after search is performed
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const { main } = data || {};
  const { list } = dataa || {};
  const main1 = list?.[0]?.weather?.[0]?.main;

  useEffect(() => {
    if (data) {
      const { coord, name } = data;
      if (coord && name) {
        dispatch(getForecast({ lat: coord?.lat, lon: coord?.lon })).then(
          (forecastData) => {
           
            const cityData = {
              name,
              temperature: main?.temp,
              id: Math.random(),
              main1: main1
          };
          
    
          dispatch(weatherAction.storeList(cityData));
          }
        );
      }
    }
  }, [data, main?.temp, dispatch]);

  return (
    <div className="container">
      <div className="search">
        <input
          className="searchbar"
          type="text"
          placeholder="Search for cities"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="button">
        <button className="btn" onClick={HandleSearch}>
          Search me
        </button>
      </div>
    </div>
  );
};

export default Search;
