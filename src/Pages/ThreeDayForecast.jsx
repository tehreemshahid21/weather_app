import React from 'react';
import './threedayforecast.css';
import sun from "../images/sun1 (1).jpg";
import download from "../images/download.png";
import download1 from "../images/download1.jpg";
import { useSelector } from "react-redux";

const ThreeDayForecast = () => {
  const data = useSelector((state) => {
    return state.forecastAPI?.Fore;
  });
  const {list} = data || {};
  const main1 = list?.[0]?.weather?.[0]?.main;
  const main2 = list?.[1]?.weather?.[0]?.main;
  const main3 = list?.[2]?.weather?.[0]?.main;
  return (
    <div className='ThreeBox'>
    <div className='forecast'>
    <h6>3-DAY FORECAST</h6>
   </div>
   <div className="SD1">
        <div className="oneline">
          <span>
            <h4>Monday</h4>
          </span>
          <span>
            <h4>Tuesday</h4>
          </span>
          <span>
            <h4>Wednesday</h4>
          </span>
        </div>
        <div className="twoline">
          <span className="immg">
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span className="immg">
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span className="immg">
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          
        </div>
        <div className="threeline">
        <span className="hh5">
            <h5>{main1 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main2 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main3 || "Sunny"}</h5>
          </span>
        </div>
        <div className="fourline">
          <span className="t">
            <h5>{Math.round(list?.[0]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[8]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[16]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
         
        </div>
      </div>
   </div>
)
}

export default ThreeDayForecast
