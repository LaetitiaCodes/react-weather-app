import React from "react";
import Images from "./Images/Cloud_poster.png";
import Videos from "./Videos/cloud_video.mp4";
import "./Background.css";

export default function Background() {
  return (
    <div className="container">
      <span className="Background">
        <video autoPlay muted loop poster={Images} alt="cloudy-image">
          <source src={Videos} type="video/mp4" alt="cloudy-video" />
        </video>{" "}
      </span>
    </div>
  );
}
