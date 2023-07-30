import React from 'react';
import Navbar from "./Navbar";
import SearchForecast from "./SearchForecast";

const ForecastPage = () => {
  return (
    <div className="bg-slate-900 flex">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <SearchForecast/>
      </div>
    </div>
  )
}

export default ForecastPage
