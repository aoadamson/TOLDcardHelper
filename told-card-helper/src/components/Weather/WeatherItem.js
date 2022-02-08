import {useContext} from "react";

import Card from '../UI/Card';
import WeatherDate from "./WeatherDate";
import './WeatherItem.css';
import PressureAltitude from "../NewWeather/Calculations/PressureAltitude";

const WeatherItem = (props) => {
    // const pressure = useContext(PressureAltitude)
    return (
        <Card className='weather-item'>
            <WeatherDate/>
            <div className='weather-item__description'>
                <h2>Runway: {props.runway}</h2>
                <div className='weather-item__price'>wind direction{props.windDirection}</div>
                <div className='weather-item__price'>crosswind{props.headwind} Knots</div>
                <div className='weather-item__price'>Altimeter: {props.altimeter}</div>
                <div className='weather-item__price'>Field Elevation: {props.fieldElevation}</div>
                <div className='weather-item__price'>Pressure: {props.pressureAltitude}</div>
                <div className='weather-item__price'>headwind Comp: {props.headwindComponent}</div>
                <div className='weather-item__price'>crosswind comp: {props.crosswindComponent}</div>
                <div className='weather-item__price'>Take off: {props.takeOff}</div>
            </div>
        </Card>
    );
}

export default WeatherItem;