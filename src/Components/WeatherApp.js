import { API_KEY } from "../utils/contrant";
import cloud from "../Assets/cloud.png";
import clear from "../Assets/clear.png";
import drizzle from "../Assets/drizzle.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/snow.png";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";
import { useDispatch, useSelector } from "react-redux";
import { changeWeather } from "../utils/weatherSlice";
import { useState } from "react";

const WeatherApp = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.weather);
  const { wicon, setWicon } = useState(cloud);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }

    const weather_API = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`;

    const data = await fetch(weather_API);
    const json = await data.json();

    dispatch(changeWeather(json));

    // if (
    //   user?.weather?.weather?.weather[0]?.icon === "01d" ||
    //   user?.weather?.weather?.weather[0]?.icon === "01n"
    // ) {
    //   setWicon(clear);
    // } else if (
    //   user?.weather?.weather?.weather[0]?.icon === "10d" ||
    //   user?.weather?.weather?.weather[0]?.icon === "10n"
    // ) {
    //   setWicon(rain);
    // } else if (
    //   user?.weather?.weather?.weather[0]?.icon === "09d" ||
    //   user?.weather?.weather?.weather[0]?.icon === "09n"
    // ) {
    //   setWicon(drizzle);
    // } else if (
    //   user?.weather?.weather?.weather[0]?.icon === "13d" ||
    //   user?.weather?.weather?.weather[0]?.icon === "13n"
    // ) {
    //   setWicon(snow);
    // }
  };

  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="top-bar">
            <input type="text" className="cityInput" placeholder="Search" />
            <div
              className="search-icon"
              onClick={() => {
                search();
              }}
            >
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>

          <div className="weather-image">
            <img src={cloud} />
          </div>

          <div className="weather-temp">{user?.weather?.main?.temp}°C</div>
          <div className="weather-location">{user?.weather?.name}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity} className="icon" />
              <div className="data">
                <div className="humidity-percentage">
                  {user?.weather?.main?.humidity}%
                </div>
                <div className="text">Humidity</div>
              </div>
            </div>

            <div className="element">
              <img src={wind} className="icon" />
              <div className="data">
                <div className="wind-rate">
                  {user?.weather?.wind?.speed}km/h
                </div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
