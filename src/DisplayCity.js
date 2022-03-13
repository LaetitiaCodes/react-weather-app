import React from "react";
import "./DisplayCity.css";

export default function DisplayCity(props) {
  return (
    <div className="container">
      <div className="row text-center mb-0">
        <div className="row text-center mb-0">
          {" "}
          <div className="col-sm-3 mt-4 mb-4">
            <span className="DisplayCity">{props.defaultCity}</span>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
