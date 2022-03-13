import React from "react";
import "./Quicksearch.css";

export default function Quicksearch() {
  return (
    <div className="Quicksearch">
      {" "}
      <button id="london-quicksearch">London</button>
      <button id="paris-quicksearch">Paris</button>
      <button id="vienna-quicksearch">Vienna</button>
    </div>
  );
}
