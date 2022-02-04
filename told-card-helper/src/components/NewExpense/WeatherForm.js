import React, { useState } from 'react';

import './WeatherForm.css';

const WeatherForm = (props) => {
    const [enteredRunway, setEnteredRunway] = useState('');
    const [enterHeadwind, setEnterHeadwind] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAltimeter, setEnteredAltimeter] = useState('');


    const runwayChangeHandler = (event) => {
        setEnteredRunway(event.target.value);

    };

    const headwindChangeHandler = (event) => {
        setEnterHeadwind(event.target.value);

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const altimeterChangeHandler = (event) => {
        setEnteredAltimeter(event.target.value);

    };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            runway: enteredRunway,
            headwind: enterHeadwind,
            date: new Date(enteredDate),
            altimeter: enteredAltimeter,
        };

        props.onSaveExpenseData(expenseData);
        setEnteredRunway('');
        setEnterHeadwind('');
        setEnteredDate('');
        setEnteredAltimeter('');
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
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        onChange={dateChangeHandler}
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
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Calculate Told</button>
            </div>
        </form>
    );
};

export default WeatherForm;