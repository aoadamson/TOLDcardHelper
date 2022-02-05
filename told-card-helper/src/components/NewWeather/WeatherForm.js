import React, { useState } from 'react';

import './WeatherForm.css';
import PressureAltitude from "./PressureAltitude";

const WeatherForm = (props) => {
    const [enteredRunway, setEnteredRunway] = useState('');
    const [enterHeadwind, setEnterHeadwind] = useState('');
    const [enteredAltimeter, setEnteredAltimeter] = useState('');
    const [enteredFieldElevation, setEnteredFieldElevation] = useState('');

    const runwayChangeHandler = (event) => {
        setEnteredRunway(event.target.value);

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

        const expenseData = {
            runway: enteredRunway,
            headwind: enterHeadwind,
            altimeter: enteredAltimeter,
            fieldElevation: enteredFieldElevation,
            pressureAltitude: PressureAltitude(enteredFieldElevation,enteredAltimeter)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredRunway('');
        setEnterHeadwind('');
        setEnteredAltimeter('');
        setEnteredFieldElevation('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-weather__controls'>
                <div className='new-expense__control'>
                    <label>Runway</label>
                    <input
                        type='number'
                        value={enteredRunway}
                        onChange={runwayChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Headwind</label>
                    <input
                        type='number'
                        value={enterHeadwind}
                        onChange={headwindChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Altimeter</label>
                    <input
                        type='number'
                        value={enteredAltimeter}
                        onChange={altimeterChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Field Elevation</label>
                    <input
                        type='number'
                        value={enteredFieldElevation}
                        onChange={fieldElevationChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Calculate Told</button>
            </div>
        </form>
    );
};

export default WeatherForm;