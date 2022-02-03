import React, { useState } from 'react';

import './WeatherInput.css';

const WeatherInput = (props) => {
    const [enterRunway, setEnterRunway] = useState('');
    const [enterHeadwind, setEnterHeadwind] = useState('');
    const [enterAltimeter, setEnterAltimeter] = useState('');

    const runwayChangeHandler = (event) => {
        setEnterRunway(event.target.value);
    };

    const headwindChangeHandler = (event) => {
        setEnterHeadwind(event.target.value);

    };

    const altimeterChangeHandler = (event) => {
        setEnterAltimeter(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();

        const currentWeather = {
            runway: enterRunway,
            headwind: enterHeadwind,
            altimeter: enterAltimeter,
        };

        props.onSaveWeatherData(currentWeather);
        setEnterRunway('');
        setEnterHeadwind('');
        setEnterAltimeter('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Runway</label>
                    <input
                        type='number'
                        value={enterRunway}
                        onChange={runwayChangeHandler}
                    />
                </div>
                <div>
                    <label>Headwind</label>
                    <input
                        type='number'
                        value={enterHeadwind}
                        onChange={headwindChangeHandler}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type='number'
                        value={enterAltimeter}
                        onChange={altimeterChangeHandler}
                    />
                </div>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default WeatherInput;