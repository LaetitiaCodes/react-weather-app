import React from "react";
import CurrentTime from "./CurrentTime";
import WeatherCondition from "./WeatherCondition";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="row align-items-center">
          <div className="col-sm-3">
            <CurrentTime /> <br />
            <WeatherCondition />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
