import React from "react";
import WeatherCard from "./components/WeatherCard/component";
import { CardDeck, CardGroup } from "reactstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-15} />
      <WeatherCard temp={20} />
      <WeatherCard temp={39} />
    </div>
  );
}

export default App;
