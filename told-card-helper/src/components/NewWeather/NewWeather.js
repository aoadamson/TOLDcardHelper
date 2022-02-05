import React from 'react';

import WeatherForm from './WeatherForm';
import './NewWeather.css';

const NewWeather = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <WeatherForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewWeather;