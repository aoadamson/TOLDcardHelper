import WeatherItem from './WeatherItem';
import Card from '../UI/Card';
import './weatherList.css';

const WeatherList = (props) => {
    return (
        <div>
            <Card className='tolds'>
                {props.items.map((weather) => (
                    <WeatherItem
                        key={weather.id}
                        runway={weather.runway}
                        windDirection={weather.windDirection}
                        headwind={weather.headwind}
                        altimeter={weather.altimeter}
                        fieldElevation={weather.fieldElevation}
                        pressureAltitude={weather.pressureAltitude}
                        headwindComponent={weather.headwindComponent}
                        crosswindComponent ={weather.crosswindComponent}
                        takeOff={weather.takeOff}
                        takeOff50ft={weather.takeOff50ft}
                        landing={weather.landing}
                        landing50ft={weather.landing50ft}
                        maxAborted={weather.maxAborted}
                    />
                ))}
            </Card>
        </div>
    );
};

export default WeatherList;