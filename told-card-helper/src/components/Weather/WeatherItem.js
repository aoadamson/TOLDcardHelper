import {useContext} from "react";

import Card from '../UI/Card';
import WeatherDate from "./WeatherDate";
import './WeatherItem.css';
import PressureAltitude from "../NewWeather/PressureAltitude";

const WeatherItem = (props) => {
    // const pressure = useContext(PressureAltitude)
    return (
        <Card className='expense-item'>
            <WeatherDate/>
            <div className='expense-item__description'>
                <h2>Runway: {props.runway}</h2>
                <div className='expense-item__price'>{props.headwind} Knots</div>
                <div className='expense-item__price'>Altimeter: {props.altimeter}</div>
                <div className='expense-item__price'>Field Elevation: {props.fieldElevation}</div>
                <div className='expense-item__price'>Pressure: {props.pressureAltitude}</div>

            </div>
        </Card>
    );
}

export default WeatherItem;