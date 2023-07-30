import React , { useState , useEffect } from 'react';
import './searchforecast.css';
import sun from "../images/sun1 (1).jpg";
import download from "../images/download.png";
import download1 from "../images/download1.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../features/WeatherSlice";
import { getForecast } from "../features/WeatherSlice";
import { weatherAction } from "../features/WeatherSlice";

const SearchForecast = () => {
  const [number , setnumber] = useState (0);

  const [namee , setnamee] = useState ("");

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.weatherApi.city;
  });
  const { main } = data || {};

  const data1 = useSelector((state) => {
    return state.weatherApi.numberArr[0];
  });


  const Objects = data1?.slice(0, number) || [];

  console.log(Objects);

  const handleNumber = () => {
    dispatch(getAllData(namee))
      .then((result) => {
        const { coord} = result.payload;
        if (coord) {
          dispatch(getForecast({ lat: coord.lat, lon: coord.lon }));
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  
  const data2 = useSelector((state) => {
    return state.forecastAPI.Fore;
  });

  const { list } = data2 || {};

  
  useEffect(() => {
    if (list) {
      const cityDataArray = list.map((item) => ({
        main: item?.weather?.[0]?.main,
        temperature: item?.main?.temp,
      }));
      dispatch(weatherAction.storenumber(cityDataArray));
    }
  }, [ list ,dispatch]);

  const arr = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
  
  return (
    <div className = "searchcontainer">
       <div className="searchforecast">
        <input
          className="searchbarForecast"
          type="text"
          placeholder="Search for cities"
          onChange = {(event) => {setnamee(event.target.value)}}
        />
        <input className = "inputForecast" type="number" placeholder="Enter number" onChange = {(event) => {setnumber(event.target.value)}} />
        <button className="btnnn" onClick = {handleNumber}>
          Search me
        </button>
      </div>

      <div className = "numberBox">
      <div className = "numberforecast">
      <h6 className="h66">{number}-DAY FORECAST</h6>
      </div>
      <div className = "displaybox">
       <div className = "displayone">
       {Objects.map((data, index) => (
      <span key={index}>{arr[index]}</span>
    ))}
  
       </div>
       <div className = "displaytwo">
       {Objects.map((data, index) => {
      return (<div>
        {data.main === "Rain" ? (
              <img src={download} alt="" />
            ) : data.main === "Clouds" ? (
              <img src={download1} alt="" />
            ) : (
              <img src={sun} alt="" />
            )}

      </div>)
       })}
  
         
        </div>

        <div className="displaythree">
 
    {Objects.map((data, index) => (
      <span key={index}>{data.main}</span>
    ))}
  
</div>

        
        <div className = "displayfour">
        {Objects.map((data, index) => (
      <span key={index}> {Math.round(data.temperature - 273.15)}°</span>
    ))}
   
        </div>
     </div>
     </div>
    </div>
  )
}

export default SearchForecast
