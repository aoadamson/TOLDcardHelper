import './PressureAltitude.css'
import {useContext} from "react";

const PressureAltitude = (fieldElevation, altimeter) => {
    // const pressureAltitude = useContext(PressureAltitude)

    return Number((29.29/altimeter)*1000+fieldElevation).toFixed(2)
}

export default PressureAltitude