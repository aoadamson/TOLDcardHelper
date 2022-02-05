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
                        altimeter={expense.altimeter}
                        fieldElevation={expense.fieldElevation}
                        pressureAltitude={expense.pressureAltitude}
                    />
                ))}
            </Card>
        </div>
    );
};

export default WeatherList;