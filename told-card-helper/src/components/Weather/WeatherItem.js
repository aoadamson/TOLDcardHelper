
import Card from '../UI/Card';
import WeatherDate from "./WeatherDate";
import './WeatherItem.css';

const WeatherItem = (props) => {
    return (
        <Card className='weather-item'>
            <WeatherDate/>
            <div className='weather-item__description'>
                <div className='weather-item__price'>Airport: {props.airport}</div>
                <div className='weather-item__price'>Runway: {props.runway}</div>
                <div className='weather-item__price'>wind direction: {props.windDirection}</div>
                <div className='weather-item__price'>Windspeed: {props.headwind} Knots</div>
                <div className='weather-item__price'>Altimeter: {props.altimeter}</div>
                <div className='weather-item__price'>Field Elevation: {props.fieldElevation}</div>
                <div className='weather-item__price'>Pressure: {props.pressureAltitude}</div>
                <div className='weather-item__price'>headwind Comp: {props.headwindComponent}</div>
                <div className='weather-item__price'>crosswind comp: {props.crosswindComponent}</div>
                <div className='weather-item__price'>Take off: {props.takeOff}</div>
                <div className='weather-item__price'>Take off 50ft: {props.takeOff50ft}</div>
                <div className='weather-item__price'>Landing: {props.landing}</div>
                <div className='weather-item__price'>Landing 50ft: {props.landing50ft}</div>
                <div className='weather-item__price'>Rate Of Climb: {props.rateOfClimb}</div>
                <div className='weather-item__price'>Max Aborted: {props.maxAborted}</div>
            </div>
        </Card>
    );
}

export default WeatherItem;