import React from "react";
import "./DresscodeTipp.css";

export default function DresscodeTipp() {
  return (
    <div className="row text-center mb-0">
      {" "}
      <div className="col-sm-6">
        {" "}
        <span>
          {" "}
          <span className="DresscodeTipp">
            No such thing as bad weather, only bad clothing!
          </span>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-icon"
            width="42"
            id="weatherIcon"
          />
        </span>
      </div>{" "}
    </div>
  );
}
