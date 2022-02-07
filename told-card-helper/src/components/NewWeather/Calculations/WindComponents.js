const WindComponent = (runway, windDirection, windSpeed) => {
    const degreeDifference = Math.abs((runway*10) - windDirection)
    const crosswind = windSpeed * Math.sin(degreeDifference * Math.PI / 180);
    const headwind = windSpeed * Math.cos(degreeDifference * Math.PI / 180);
    return {
        headwindComp: headwind,
        crosswindComp: crosswind
    }
}

export default WindComponent