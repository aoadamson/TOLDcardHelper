import React, {useState} from 'react';

import NewWeather from './components/NewWeather/NewWeather';
import WeatherList from './components/Weather/WeatherList';
import TopBar from "./components/TopBar/TopBar";
import PressureAltContext from "./components/Context/PressureAltContext";

const DUMMY_TOLDS = [
    // {
    //     id: 'example',
    //     runway: 31,
    //     windDirection: 320,
    //     headwind: 5,
    //     altimeter: 29.02,
    //     fieldElevation: 958,
    //     pressureAltitude: 1009.30,
    //     headwindComponent: 4,
    //     crosswindComponent: 3,
    // },
];

const App = () => {
    const [weather, setWeather] = useState(DUMMY_TOLDS);
    
    const addWeatherHandler = (weather) => {
        setWeather((prevWeather) => {
            return [weather, ...prevWeather];
        });
    };
    return (
        <>
            <TopBar/>
                <NewWeather onAddWeather={addWeatherHandler}/>
                <WeatherList items={weather}/>
        </>
    );
};

export default App;

