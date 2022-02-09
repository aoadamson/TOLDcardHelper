import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import './WeatherForm.css';
import PressureAltitude from "./Calculations/PressureAltitude";
import WindComponent from "./Calculations/WindComponents";
import TakeOff from "./Calculations/TakeOff";
import {toldCardAmountActions} from "../../store";
import Landing from "./Calculations/Landing";

const WeatherForm = (props) => {
    const dispatch = useDispatch();
    const [enteredRunway, setEnteredRunway] = useState('');
    const [enteredWindDirection, setEnteredWindDirection] = useState('');
    const [enterHeadwind, setEnterHeadwind] = useState('');
    const [enteredAltimeter, setEnteredAltimeter] = useState('');
    const [enteredFieldElevation, setEnteredFieldElevation] = useState('');


    const runwayChangeHandler = (event) => {
        setEnteredRunway(event.target.value);

    };

    const windDirectionChangeHandler = (event) => {
        setEnteredWindDirection(event.target.value);

    };

    const headwindChangeHandler = (event) => {
        setEnterHeadwind(event.target.value);

    };

    const altimeterChangeHandler = (event) => {
        setEnteredAltimeter(event.target.value);

    };
    const fieldElevationChangeHandler = (event) => {
        setEnteredFieldElevation(event.target.value);

    };


    const submitHandler = (event) => {
        event.preventDefault();
        const windComponent = WindComponent(enteredRunway, enteredWindDirection, enterHeadwind)
        const pressureAltitude = PressureAltitude(enteredFieldElevation, enteredAltimeter)
        const result_takeOff = TakeOff(pressureAltitude, windComponent.headwindComp, 30, false, 2000)
        const result_landing = Landing(windComponent.headwindComp, false, pressureAltitude)
        const resultMaxAborted = result_takeOff.result_no_obstacle + result_landing.result_no_obstacle +(((result_takeOff.result_no_obstacle + result_landing.result_no_obstacle)/100)*30)
        const weatherData = {
            runway: enteredRunway,
            headwind: enterHeadwind,
            windDirection: enteredWindDirection,
            altimeter: enteredAltimeter,
            fieldElevation: enteredFieldElevation,
            pressureAltitude: pressureAltitude,
            headwindComponent: windComponent.headwindComp,
            crosswindComponent: windComponent.crosswindComp,
            takeOff: result_takeOff.result_no_obstacle,
            takeOff50ft: result_takeOff.result_obstacle_50ft,
            landing: result_landing.result_no_obstacle,
            landing50ft: result_landing.result_obstacle_50ft,
            maxAborted: resultMaxAborted,
        };


        props.onSaveWeatherData(weatherData);
        dispatch(toldCardAmountActions.increment())
        setEnteredRunway('');
        setEnteredWindDirection('')
        setEnterHeadwind('');
        setEnteredAltimeter('');
        setEnteredFieldElevation('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className='new-weather__control'>
                    <label>Runway</label>
                    <input
                        type='number'
                        value={enteredRunway}
                        onChange={runwayChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Wind Direction</label>
                    <input
                        type='number'
                        value={enteredWindDirection}
                        onChange={windDirectionChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Headwind</label>
                    <input
                        type='number'
                        value={enterHeadwind}
                        onChange={headwindChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Altimeter</label>
                    <input
                        type='number'
                        value={enteredAltimeter}
                        onChange={altimeterChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Field Elevation</label>
                    <input
                        type='number'
                        value={enteredFieldElevation}
                        onChange={fieldElevationChangeHandler}
                    />
                </div>
            </div>
            <div className='new-weather__actions'>
                <button type='submit'>Calculate Told</button>
            </div>
        </form>
    );
};

export default WeatherForm;