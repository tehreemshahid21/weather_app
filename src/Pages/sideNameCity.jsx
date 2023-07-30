import React from 'react';
import sun from "../images/sun1 (1).jpg";
import download from "../images/download.png";
import download1 from "../images/download1.jpg";
import './sidenamecity.css';
import { useSelector } from "react-redux";

const SideNameCity = () => {
  const data = useSelector((state) => {
    return state.weatherApi.city;
  });
  const data1 = useSelector((state) => {
    return state.forecastAPI.Fore;
  });

  const {main} = data;
  const { list } = data1 || {};
  const main1 = list?.[0]?.weather?.[0]?.main;
  return (
    <div>
        <div className="sidecontainer">
      <div className="side">
        <div className="name">
          <h1>{data?.name  || "Madrid"}</h1>
          <p>Pressure: {main?.pressure || "100"}</p>
        </div>
        <div className="temp">
          <h1>{Math.round(main?.temp - 273.15) || "21"}°</h1>
        </div>
      </div>
      <div className="pic">
      {Math.round(main?.temp - 273.15) > 20 && Math.round(main?.temp - 273.15) < 30 ? (
              <img src={download} alt="" />
            ) :Math.round(main?.temp - 273.15) > 0 && Math.round(main?.temp - 273.15) < 20  ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}
      </div>
    </div>
    </div>
  )
}

export default SideNameCity
