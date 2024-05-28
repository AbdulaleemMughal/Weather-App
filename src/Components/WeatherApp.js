import { API_KEY } from "../utils/contrant";
import cloud from "../Assets/cloud.png";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";
import { useDispatch, useSelector } from "react-redux";
import { changeWeather } from "../utils/weatherSlice";

const WeatherApp = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.weather?.weather);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");

    if (element[0].value === "") {
      return 0;
    }

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`);
    // const data = await fetch(weather_API);
    const json = await data.json();

    dispatch(changeWeather(json));

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
              Search
            </div>
          </div>

          <div className="weather-image">
            <img src={cloud} />
          </div>

          <div className="weather-temp">{Math.floor(user?.main?.temp)}°C</div>
          <div className="weather-location">{user?.name}</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity} className="icon" />
              <div className="data">
                <div className="humidity-percentage">
                  {user?.main?.humidity}%
                </div>
                <div className="text">Humidity</div>
              </div>
            </div>

            <div className="element">
              <img src={wind} className="icon" />
              <div className="data">
                <div className="wind-rate">
                  {Math.floor(user?.wind?.speed)}km/h
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
