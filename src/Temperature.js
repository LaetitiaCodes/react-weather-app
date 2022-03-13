import React from "react";
import "./Temperature.css";
export default function Temperature() {
  return (
    <div className="row text-center mb-0">
      <div className="col-sm-3 mt-4 mb-4" id="temperatureContainer">
        <span className="Temperature">
          {" "}
          <span className="cityTemperature" id="cityTemperature">
            -1
          </span>
          <span id="celsius">°C </span>
          <span id="fahrenheit">|°F</span>
        </span>
      </div>{" "}
    </div>
  );
}
