import Background from "./Background";
import Search from "./Search";
import DisplayCity from "./DisplayCity";
import Temperature from "./Temperature";
import DresscodeTipp from "./DresscodeTipp";
import CurrentWeather from "./CurrentWeather";
import HumidityWind from "./HumidityWind";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Background />
        <div className="row">
          <div className="col-sm-6">
            <Search />{" "}
          </div>{" "}
        </div>
        <div className="row text-center mb-0">
          <div className="row text-center mb-0">
            {" "}
            <div className="col-sm-3 mt-4 mb-4">
              <DisplayCity defaultCity="Stockholm" />{" "}
            </div>{" "}
            <div className="col-sm-3 mt-4 mb-4" id="temperatureContainer">
              <Temperature />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-sm-6">
          <DresscodeTipp />{" "}
        </div>{" "}
      </div>
      <div className="row align-items-center">
        <div className="col-sm-3">
          {" "}
          <CurrentWeather />
        </div>
        <div className="col-sm-3">
          <HumidityWind />
        </div>
        <div id="forecast"></div>{" "}
      </div>
      <Footer />{" "}
    </div>
  );
}

export default App;
