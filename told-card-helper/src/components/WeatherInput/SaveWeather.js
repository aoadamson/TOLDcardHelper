import WeatherInput from "./WeatherInput";

const SaveWeather = (props) => {
    const saveWeatherDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddWeather(expenseData);
    };

    return (
        <div className='new-expense'>
            <WeatherInput onSaveWeatherData={saveWeatherDataHandler} />
        </div>
    );
};

export default SaveWeather;