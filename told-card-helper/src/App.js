import React, {useState} from 'react';

import NewWeather from './components/NewWeather/NewWeather';
import WeatherList from './components/Weather/WeatherList';
import TopBar from "./components/TopBar/TopBar";

const DUMMY_TOLDS = [
];

const App = () => {
    const [weather, setWeather] = useState(DUMMY_TOLDS);
    
    const addWeatherHandler = (weather) => {
        setWeather((prevWeather) => {
            return [weather, ...prevWeather];
        });
    };
    return (
        <div style={{backgroundColor:'dimgray'}}>
            <TopBar/>
                <NewWeather onAddWeather={addWeatherHandler}/>
                <WeatherList items={weather}/>
        </div>
    );
};

export default App;

