import React, { useState } from 'react';
import Search from "./search";
import Navbar from "./Navbar";
import SideNameCity from './sideNameCity';
import SideTodayForecast from './SideTodayForecast';
import ThreeDayForecast from './ThreeDayForecast';
import CityList from './CityList';

const Cities = () => {
  const [arr, setArr] = useState([]);

  const getcitylist = (evl) => {
    setArr( (prev) => {
      return [...prev,evl];
    });
  };

  const deleteCity = (id) => {
    const newArr = arr.filter((ta) => {
      return ta.name !== id;
    });
    setArr(newArr);
  };

  return (
    <div className="bg-slate-900 flex">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col">
        <Search getcitylist={getcitylist} />
        <CityList arr={arr} deleteCity={deleteCity} />
      </div>
      <div className="flex flex-col">
        <SideNameCity />
        {/* <hr className='mt-6'/> */}
        <SideTodayForecast />
        {/* <hr className='mt-5'/> */}
        <ThreeDayForecast />
      </div>
    </div>
  );
};

export default Cities;
