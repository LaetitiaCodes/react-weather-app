import React from "react";
import "./HumidityWind.css";
import Wind from "./Wind";
import Humidity from "./Humidity";

export default function HumidityWind() {
  return (
    <div className="row">
      <div className="row align-items-center">
        <div className="col-sm-3">
          <div className="HumidityWind">
            <Humidity />
            <br />
            <Wind />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
