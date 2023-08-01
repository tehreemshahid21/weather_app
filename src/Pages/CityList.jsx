import React, { useState, useEffect } from "react";
import "./citylist.css";
import sun from "../images/sun1 (1).jpg";
import { useSelector , useDispatch } from "react-redux";
import download from "../images/download.png";
import download1 from "../images/download1.jpg";
import { TiDelete } from "react-icons/ti";
import { weatherAction } from "../features/WeatherSlice";

const CityList = () => {
  
const data1 = useSelector((state) => {
    return state.weatherApi.list;
  });

  console.log(data1);

  const data = useSelector((state) => {
    return state.forecastAPI.Fore;
  });


  const dispatch = useDispatch();

  const HandleDelete = (id) =>{
        dispatch(weatherAction.deleteCity(id));
  }

  return (
    <div>
      {data1.map((ev) => {
        return (
          <div className="divone" key={ev.name}>
            <div className="divimg">
            {Math.round(ev?.temperature - 273.15) > 20 && Math.round(ev?.temperature - 273.15) < 30 ? (
              <img src={download} alt="" />
            ) :Math.round(ev?.temperature - 273.15) > 0 && Math.round(ev?.temperature - 273.15) < 20  ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}

            </div>
            <div className="divname">
              <h1>{ev.name}</h1>
              <span className="sp">23:20</span>
            </div>
            <div className="divtemp">
              <h1>{Math.round(ev.temperature - 273.15)}°</h1>
            </div>
            <div className="delete-icon" onClick={() => HandleDelete(ev.id)}>
              <TiDelete size={25} color="white" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
