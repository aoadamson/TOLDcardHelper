import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import './WeatherForm.css';
import PressureAltitude from "./Calculations/PressureAltitude";
import WindComponent from "./Calculations/WindComponents";
import TakeOff from "./Calculations/TakeOff";
import {toldCardAmountActions} from "../../store";
import Landing from "./Calculations/Landing";
import RateOfClimb from "./Calculations/RateOfClimb";

const WeatherForm = (props) => {
    const dispatch = useDispatch();
    const [enteredAirport, setEnteredAirport] = useState('');
    const [enteredRunway, setEnteredRunway] = useState('');
    const [enteredWindDirection, setEnteredWindDirection] = useState('');
    const [enterHeadwind, setEnterHeadwind] = useState('');
    const [enteredAltimeter, setEnteredAltimeter] = useState('');
    const [enteredFieldElevation, setEnteredFieldElevation] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const airportChangeHandler = (event) => {
        setEnteredAirport(event.target.value);
    };

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
    const isGrassChangeHandler = (event) => {
        setIsChecked(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const windComponent = WindComponent(enteredRunway, enteredWindDirection, enterHeadwind)
        const pressureAltitude = PressureAltitude(enteredFieldElevation, enteredAltimeter)
        const result_takeOff = TakeOff(pressureAltitude, windComponent.headwindComp, 30, isChecked, 2000)
        const result_landing = Landing(windComponent.headwindComp, isChecked, pressureAltitude)
        const resultMaxAborted = result_takeOff.result_no_obstacle + result_landing.result_no_obstacle +(((result_takeOff.result_no_obstacle + result_landing.result_no_obstacle)/100)*30)
        const weatherData = {
            airport: enteredAirport,
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
            rateOfClimb: RateOfClimb(2000, pressureAltitude),
            maxAborted: resultMaxAborted,
        };


        props.onSaveWeatherData(weatherData);
        dispatch(toldCardAmountActions.increment())
        setEnteredAirport('');
        setEnteredRunway('');
        setEnteredWindDirection('')
        setEnterHeadwind('');
        setEnteredAltimeter('');
        setEnteredFieldElevation('');
        setIsChecked(false)
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className='new-weather__control'>
                    <label>Airport</label>
                    <input
                        placeholder={"airport"}
                        type='text'
                        value={enteredAirport}
                        onChange={airportChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Runway</label>
                    <input
                        placeholder={"runway"}
                        type='number'
                        value={enteredRunway}
                        onChange={runwayChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Wind Direction</label>
                    <input
                        placeholder={"wind"}
                        type='number'
                        value={enteredWindDirection}
                        onChange={windDirectionChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Headwind</label>
                    <input
                        placeholder={"headwind"}
                        type='number'
                        value={enterHeadwind}
                        onChange={headwindChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Altimeter</label>
                    <input
                        placeholder={"altimeter"}
                        type='number'
                        value={enteredAltimeter}
                        onChange={altimeterChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Field Elevation</label>
                    <input
                        placeholder={"elevation"}
                        type='number'
                        value={enteredFieldElevation}
                        onChange={fieldElevationChangeHandler}
                    />
                </div>
                <div className='new-weather__control'>
                    <label>Is the runway grass?</label>
                    <input
                        placeholder={"grass"}
                        type='checkbox'
                        checked={isChecked}
                        onChange={isGrassChangeHandler}
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