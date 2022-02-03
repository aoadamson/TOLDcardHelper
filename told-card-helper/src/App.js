
import WeatherInput from "./components/WeatherInput/WeatherInput";
import {useState} from "react";
function App() {

  const [weather, setWeather] = useState({});

  const onAddWeatherHandler = (weather) => {
    setWeather((prevWeather) => {
      return [weather, ...prevWeather];
    });
  };

  return (
      <div>
        <WeatherInput onSaveWeather={onAddWeatherHandler} />
      </div>
  );
}

export default App;

