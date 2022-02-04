
import React from 'react';

import WeatherDate from './WeatherDate';
import Card from '../UI/Card';
import './WeatherItem.css';

const WeatherItem = (props) => {
    return (
        <Card className='expense-item'>
            <WeatherDate date={props.date} />
            <div className='expense-item__description'>
                <h2>Runway: {props.runway}</h2>
                <div className='expense-item__price'>{props.headwind} Knots</div>
                <div className='expense-item__price'>Altimeter: {props.altimeter}</div>
            </div>
        </Card>
    );
}

export default WeatherItem;