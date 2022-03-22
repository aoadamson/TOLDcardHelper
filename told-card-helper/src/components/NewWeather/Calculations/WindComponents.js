const WindComponent = (runway, windDirection, windSpeed) => {
    let degreeDifference = 180 - Math.abs(Math.abs((runway * 10) - windDirection) - 180);
    console.log(degreeDifference)
    const crosswind = Math.round(Math.abs(windSpeed * Math.sin(degreeDifference)));
    const headwind = Math.round(Math.abs(windSpeed * Math.cos(degreeDifference)));
    console.log(headwind)
    return {
        headwindComp: headwind,
        crosswindComp: crosswind
    }
}

export default WindComponent