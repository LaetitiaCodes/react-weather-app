import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function showWeatherFromButton(event) {
    setCity(event.target.value);
    search();
  }
  function search() {
    const apiKey = "da8f5611cc0070b3da5f77e2e4864cee";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter your city, e.g. Stockholm"
                size="30"
                className="Search"
                autoFocus="on"
                autoComplete="off"
                id="search-input"
                onChange={handleCityChange}
              />

              <input type="submit" value="🔎" id="submit-data" />
              <input type="submit" value="📍" id="current-location" />
            </form>
            <div className="Quicksearch">
              {" "}
              <button id="london-quicksearch" onClick={showWeatherFromButton}>
                London
              </button>
              <button id="paris-quicksearch" onClick={showWeatherFromButton}>
                Paris
              </button>
              <button id="vienna-quicksearch" onClick={showWeatherFromButton}>
                Vienna
              </button>
            </div>
            ;
            <WeatherInfo data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>{" "}
        </div>{" "}
      </div>
    );
  } else {
    search();
    alert("Loading...");
  }
}
