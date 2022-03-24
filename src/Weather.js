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

  function searchNYWeatherFast(event) {
    event.preventDefault();
    setCity("New York");
    search();
  }
  function searchBrisbaneWeatherFast(event) {
    event.preventDefault();
    setCity("Brisbane");
    search();
  }
  function searchLondonWeatherFast(event) {
    event.preventDefault();
    setCity("London");
    search();
  }
  function search() {
    const apiKey = "ae9eba26b8679126fcce507a3677b3eb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
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
              </div>{" "}
            </div>
          </form>
          <div className="Quicksearch">
            {" "}
            <button id="new-york-quicksearch" onClick={searchNYWeatherFast}>
              New York
            </button>
            <button
              id="brisbane-quicksearch"
              onClick={searchBrisbaneWeatherFast}
            >
              Brisbane
            </button>
            <button id="london-quicksearch" onClick={searchLondonWeatherFast}>
              London
            </button>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
