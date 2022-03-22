import WeatherItem from './WeatherItem';
import Card from '../UI/Card';
import './weatherList.css';

const WeatherList = (props) => {
    return (
        <div>
            <Card className='tolds'>
                <h2 className={'told-title__controls'}>TOLD Card List</h2>
                {props.items.map((weather) => (
                    <WeatherItem
                        key={weather.id}
                        airport={weather.airport}
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
                        rateOfClimb={weather.rateOfClimb}
                        maxAborted={weather.maxAborted}
                    />
                ))}
            </Card>
        </div>
    );
};

export default WeatherList;