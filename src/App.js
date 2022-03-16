import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import Images from "./Images/Cloud_poster.png";
import Videos from "./Videos/cloud_video.mp4";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <span className="Background">
          <video autoPlay muted loop poster={Images} alt="cloudy-image">
            <source src={Videos} type="video/mp4" alt="cloudy-video" />
          </video>{" "}
        </span>
        <Weather defaultCity="Stockholm" />
        <Footer />{" "}
      </div>{" "}
    </div>
  );
}

export default App;
