import React from "react";
import "./Search.css";
import Quicksearch from "./Quicksearch";

export default function Search() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <form>
            <input
              type="text"
              placeholder="Enter your city, e.g. Stockholm"
              size="30"
              className="Search"
              autoFocus="on"
              autoComplete="off"
              id="search-input"
            />
            <input type="submit" value="🔎" id="submit-data" />
            <input type="submit" value="📍" id="current-location" />
          </form>
          <Quicksearch />
        </div>{" "}
      </div>{" "}
    </div>
  );
}
