import React from "react";
import "./todayForecast.css";
import sun from "../images/sun1 (1).jpg";
import download from "../images/download.png";
import download1 from "../images/download1.jpg";
import { useSelector } from "react-redux";

const TodayForecast = () => {

  const data = useSelector((state) => {
    return state.forecastAPI?.Fore;
  });
  console.log(data);

  const {list} = data || {};
  const main1 = list?.[0]?.weather?.[0]?.main;
   
  return (
    <div className="contain">
      <div className="forecast">
        <h6>TODAY'S FORECAST</h6>
      </div>
      <div className="details">
        <div className="one">
          <span>
            <h6>6:00AM</h6>
          </span>
          <span>
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span>
            <h5>{Math.round(list?.[0]?.main?.temp-273.15) || "20"}°</h5>
          </span>
        </div>
        <hr className='vertical-line'/>
        <div className="two">
          <span>
            <h6>9:00AM</h6>
          </span>
          <span>
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span>
          <h5>{Math.round(list?.[1]?.main?.temp-273.15) || "20"}°</h5>
          </span>
        </div>
        <hr className='vertical-line'/>
        <div className="three">
          <span>
            <h6>12:00PM</h6>
          </span>
          <span>
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span>
          <h5>{Math.round(list?.[2]?.main?.temp-273.15) || "20"}°</h5>
          </span>
        </div>
        <hr className='vertical-line'/>
        <div className="four">
          <span>
            <h6>3:00PM</h6>
          </span>
          <span>
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span>
          <h5>{Math.round(list?.[3]?.main?.temp-273.15) || "20"}°</h5>
          </span>
        </div>
        <hr className='vertical-line'/>
        <div className="five">
          <span>
            <h6>6:00PM</h6>
          </span>
          <span>
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span>
          <h5>{Math.round(list?.[4]?.main?.temp-273.15) || "20"}°</h5>
          </span>
        </div>
        <hr className='vertical-line'/>
        <div className="six">
          <span>
            <h6>9:00PM</h6>
          </span>
          <span>
          {main1 === "Rain" ? (
              <img src={download} alt="" />
            ) : main1 === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
          </span>
          <span>
          <h5>{Math.round(list?.[5]?.main?.temp-273.15) || "20"}°</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
