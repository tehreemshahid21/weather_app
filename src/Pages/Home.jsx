import React, { useState } from "react";
import Search from "./search";
import Navbar from "./Navbar";
import CityName from "./CityName";
import TodayForecast from "./TodayForecast";
import AirCondition from "./AirCondition";
import SevenDays from "./SevenDays";

const Home = () => {
 

  return (
    <div className="bg-slate-900 flex">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <Search />
        <CityName  />
        <TodayForecast />
        <AirCondition />
      </div>
      <div>
        <SevenDays />
      </div>
    </div>
  );
};

export default Home;
