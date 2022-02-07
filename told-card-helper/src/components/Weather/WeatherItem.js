import {useContext} from "react";

import Card from '../UI/Card';
import WeatherDate from "./WeatherDate";
import './WeatherItem.css';
import PressureAltitude from "../NewWeather/Calculations/PressureAltitude";

const WeatherItem = (props) => {
    // const pressure = useContext(PressureAltitude)
    return (
        <Card className='expense-item'>
            <WeatherDate/>
            <div className='expense-item__description'>
                <h2>Runway: {props.runway}</h2>
                <div className='expense-item__price'>wind direction{props.windDirection}</div>
                <div className='expense-item__price'>crosswind{props.headwind} Knots</div>
                <div className='expense-item__price'>Altimeter: {props.altimeter}</div>
                <div className='expense-item__price'>Field Elevation: {props.fieldElevation}</div>
                <div className='expense-item__price'>Pressure: {props.pressureAltitude}</div>
                <div className='expense-item__price'>headwind Comp: {props.headwindComponent}</div>
                <div className='expense-item__price'>crosswind comp: {props.crosswindComponent}</div>
                <div className='expense-item__price'>Take off: {props.takeOff}</div>
            </div>
        </Card>
    );
}

export default WeatherItem;