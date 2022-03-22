import {RATE_OF_CLIMB, RATE_OF_CLIMB_AGL} from "../../POH/RateOfClimb";
import {closest, closest_not_going_over, closest_not_going_under} from "./Utils";

const rate_of_climb_calc = (closest_weight, min_alt, max_alt, pressureAltitude) => {
    const max = RATE_OF_CLIMB[closest_weight][max_alt];
    const min = RATE_OF_CLIMB[closest_weight][min_alt];
    console.log(max)
    return (((min - max) / (min_alt - max_alt)) * pressureAltitude) + max;
}

const RateOfClimb = (grossWeight, pressureAltitude) => {
    const closest_weight = closest([1700, 2000, 2300], grossWeight);
    const min_alt = closest_not_going_over(RATE_OF_CLIMB_AGL, pressureAltitude);
    const max_alt = closest_not_going_under(RATE_OF_CLIMB_AGL, pressureAltitude);
    return Math.round(rate_of_climb_calc(closest_weight, min_alt, max_alt, pressureAltitude))
}
export default RateOfClimb