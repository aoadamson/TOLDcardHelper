import './WeatherDate.css';

const WeatherDate = () => {
    const date = new Date()
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className='told-date'>
            <div className='told-date__month'>{month}</div>
            <div className='told-date__year'>{year}</div>
            <div className='told-date__day'>{day}</div>
        </div>
    );
};

export default WeatherDate;