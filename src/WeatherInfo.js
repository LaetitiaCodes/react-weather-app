import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-3 mt-4 mb-4">
          <span className="cityName">{props.data.city}</span>
        </div>{" "}
      </div>{" "}
      <div className="col-sm-3 mt-4 mb-4" id="temperatureContainer">
        <WeatherTemperature celsius={props.data.temperature} />
      </div>{" "}
      <div className="col-sm-6">
        <span className="DresscodeTipp">
          {" "}
          No such thing as bad weather, only bad clothing!{" "}
          <WeatherIcon
            code={props.data.icon}
            size={20}
            className="weatherIcon"
          />
        </span>
      </div>{" "}
      <div className="row">
        {" "}
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="CurrentWeather">
              <span className="CurrentTime">
                Last updated:
                <FormattedDate date={props.data.date} />
              </span>{" "}
              <span id="weatherCondition">
                <span className="text-capitalize">
                  {props.data.description}
                </span>
              </span>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="col-sm-12">
        <div className="HumidityWind">
          <span id="humidity">
            Humidity: {Math.round(props.data.humidity)}%
          </span>
          <br />
          <span id="wind">Wind: {Math.round(props.data.wind)} m/s</span>
        </div>{" "}
      </div>
      <div id="forecast"></div>{" "}
    </div>
  );
}
