const PressureAltitude = (fieldElevation, altimeter) => {

    return Number((29.29/altimeter)*1000+fieldElevation).toFixed(2)
}

export default PressureAltitude