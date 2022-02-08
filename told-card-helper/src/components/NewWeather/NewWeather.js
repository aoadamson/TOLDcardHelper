import React from 'react';

import WeatherForm from './WeatherForm';
import './NewWeather.css';

const NewWeather = (props) => {
    const saveWeatherDataHandler = (enteredWeatherData) => {
        const weatherData = {
            ...enteredWeatherData,
            id: Math.random().toString()
        };

        props.onAddWeather(weatherData);
    };

    return (
        <div className='new-weather'>
            <WeatherForm onSaveWeatherData={saveWeatherDataHandler} />
        </div>
    );
};

export default NewWeather;