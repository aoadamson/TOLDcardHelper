import React, {useState} from 'react';

import NewWeather from './components/NewWeather/NewWeather';
import WeatherList from './components/Weather/WeatherList';
import TopBar from "./components/TopBar/TopBar";
import PressureAltContext from "./components/Context/PressureAltContext";

const DUMMY_EXPENSES = [
    {
        id: 'example',
        runway: 31,
        windDirection: 320,
        headwind: 5,
        altimeter: 29.02,
        fieldElevation: 958,
        pressureAltitude: 1009.30,
        headwindComponent: 4,
        crosswindComponent: 3,
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
        <>
            <TopBar/>
                <NewWeather onAddExpense={addExpenseHandler}/>
                <WeatherList items={expenses}/>
        </>
    );
};

export default App;

