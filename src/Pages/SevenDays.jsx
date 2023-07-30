import React from "react";
import "./sevenDays.css";
import sun from "../images/sun1 (1).jpg";
import download from "../images/download.png";
import download1 from "../images/download1.jpg";
import { useSelector } from "react-redux";

const SevenDays = () => {
  const data1 = useSelector((state) => {
    return state.forecastAPI.Fore;
  });

  const { list } = data1 || {};
  const main1 = list?.[0]?.weather?.[0]?.main;
  const main2 = list?.[1]?.weather?.[0]?.main;
  const main3 = list?.[2]?.weather?.[0]?.main;
  const main4 = list?.[3]?.weather?.[0]?.main;
  const main5 = list?.[4]?.weather?.[0]?.main;
  const main6 = list?.[5]?.weather?.[0]?.main;
  const main7 = list?.[6]?.weather?.[0]?.main;

  const main8 = list?.[0]?.weather?.[0]?.main;


  return (
    <div className="Box">
      <div className="forecast">
        <h6>7-DAY FORECAST</h6>
      </div>
      <div className="SD">
        <div className="day">
          <span>
            <h4>Monday</h4>
          </span>
          <span>
            <h4>Tuesday</h4>
          </span>
          <span>
            <h4>Wednesday</h4>
          </span>
          <span>
            <h4>Thursday</h4>
          </span>
          <span>
            <h4>Friday</h4>
          </span>
          <span>
            <h4>Saturday</h4>
          </span>
          <span>
            <h4>Sunday</h4>
          </span>
        </div>
        <div className="day2">
          <span className="immg">
          {main8 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}

          </span>
          <span className="immg">
          {main8 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span className="immg">
          {main8 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span className="immg">
          {main8 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span className="immg">
          {main8 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span className="immg">
          {main8 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span className="immg">
          {main8 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
        </div>
        <div className="day3">
          <span className="hh5">
            <h5>{main1 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main2 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main3 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main4 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main5 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main6 || "Sunny"}</h5>
          </span>
          <span className="hh5">
            <h5>{main7 || "Sunny"}</h5>
          </span>
        </div>
        <div className="day4">
          <span className="t">
            <h5>{Math.round(list?.[0]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[8]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[16]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[24]?.main?.temp - 273.15) ||  "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[32]?.main?.temp - 273.15) ||  "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[39]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
          <span className="t">
            <h5>{Math.round(list?.[38]?.main?.temp - 273.15) || "20"}/21</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SevenDays;
