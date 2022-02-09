const WindComponent = (runway, windDirection, windSpeed) => {
    let degreeDifference = Math.abs((runway *10 ) - windDirection)
    if(degreeDifference> 90){
        degreeDifference = degreeDifference - 90;
    }
    const crosswind = Math.round(windSpeed * Math.sin(degreeDifference * Math.PI / 180));
    const headwind = Math.round(windSpeed * Math.cos(degreeDifference * Math.PI / 180));
    return {
        headwindComp: headwind,
        crosswindComp: crosswind
    }
}

export default WindComponent