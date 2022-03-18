import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      {" "}
      <footer className="container">
        <a
          href="https://github.com/LaetitiaCodes/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced code{" "}
        </a>
        by Laetitia Ganglmair hosted on{" "}
        <a
          href="https://react-weather-app-by-laetitia.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>{" "}
    </div>
  );
}
