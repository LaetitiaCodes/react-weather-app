import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="row text-center mb-0">
        {" "}
        <div className="col-sm-3">
          {" "}
          <span className="cityTemperature">
            {Math.round(props.celsius)}
          </span>{" "}
          <span className="unit">
            <span id="celsius">
              °C{" "}
              <a href="/" onClick={showFahrenheit}>
                <span id="fahrenheit">|°F</span>
              </a>
            </span>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row text-center mb-0">
        <div className="col-sm-3 ">
          <span className="cityTemperature">{Math.round(fahrenheit())}</span>
          <span className="unit">
            {" "}
            <span id="celsius">
              <a href="/" onClick={showCelsius}>
                {" "}
                °C{" "}
              </a>{" "}
              |°F
            </span>{" "}
          </span>
        </div>{" "}
      </div>
    );
  }
}
