import React from 'react'
import './airCondition.css';
import { BsThermometerHalf } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { BsFillDropletFill } from "react-icons/bs";
import { CiSun} from "react-icons/ci";
import { useSelector } from "react-redux";

const AirCondition = () => {
  const data = useSelector((state) => {
    return state.weatherApi.city;
  });
  const {main} = data;
  const {wind} = data;
  const {clouds} = data;
  return (
    <div className='box'>
      <div className='air'>
      <h6>AIR CONDITIONS</h6>
      <button className='btnn'>see more</button>
      </div>

      <div className='box1'>
          <div className='side1'>
              <div className='content'>
              <BsThermometerHalf size={20} className='mx-6 mt-2 text-white' />  
              <span className='rf'><h5>Real Feel</h5></span>
              </div>
              <div className='tem'>
              <span><h5>{Math.round(main?.feels_like - 273.15) || "20"}°</h5></span>
              </div>
          </div>

          <div className='side2'>
              <div className='content'>
              <FaWind size={20} className='mx-6 mt-2 text-white' />  
              <span className='rf'><h5>Wind</h5></span>
              </div>
              <div className='tem'>
              <span><h5>{wind?.speed || "10"} km/h</h5></span>
              </div>
          </div>
          </div>
       <div className='box2'>
       <div className='side1'>
              <div className='content'>
              <BsFillDropletFill size={20} className='mx-6 mt-2 text-white' />  
              <span className='rf'><h5>Chance of Rain</h5></span>
              </div>
              <div className='tem'>
              <span><h5>{main?.humidity || "20"}%</h5></span>
              </div>
          </div>

          <div className='side3'>
              <div className='content'>
              <CiSun size={20} className='mx-6 mt-2 text-white' />  
              <span className='rf'><h5>UV Index</h5></span>
              </div>
              <div className='tem'>
              <span><h5>{clouds?.all || "20"}</h5></span>
              </div>
          </div>
        
       </div>
    

    </div>
  )
}

export default AirCondition
