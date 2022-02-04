import React, { useState } from 'react';

import NewWeather from './components/NewExpense/NewWeather';
import WeatherList from './components/Expenses/WeatherList';

const DUMMY_EXPENSES = [
    {
        id: 'example',
        runway: 31,
        headwind: 5,
        date: new Date(2020, 7, 14),
        altimeter: 29.02
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };
    return (
        <div>
            <NewWeather onAddExpense={addExpenseHandler} />
            <WeatherList items={expenses} />
        </div>
    );
};

export default App;

