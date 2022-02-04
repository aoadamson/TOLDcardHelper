import WeatherItem from './WeatherItem';
import Card from '../UI/Card';
import './weatherList.css';

const WeatherList = (props) => {

    return (
        <div>
            <Card className='expenses'>
                {props.items.map((expense) => (
                    <WeatherItem
                        key={expense.id}
                        runway={expense.runway}
                        headwind={expense.headwind}
                        date={expense.date}
                        altimeter={expense.altimeter}
                    />
                ))}
            </Card>
        </div>
    );
};

export default WeatherList;