import {AGL_CHOICES, LANDING_DATA} from "../../POH/LandingData";
import {closest_not_going_over, closest_not_going_under} from "./Utils";

const landing_calc = (obstacle, min_alt, max_alt, pressureAltitude) => {
    const min = LANDING_DATA[obstacle][min_alt];
    return (((LANDING_DATA[obstacle][max_alt] - min) / (max_alt - min_alt)) * pressureAltitude) + min;
}

const Landing = (headwindComponent, isGrass, pressureAltitude) => {
    const min_alt = closest_not_going_over(AGL_CHOICES, pressureAltitude);
    const max_alt = closest_not_going_under(AGL_CHOICES, pressureAltitude);

    const landing_no_notes = landing_calc("no-obstacle", min_alt, max_alt, pressureAltitude);
    const calculate_headwind_correction = landing_no_notes - (((landing_no_notes / 100) * (headwindComponent * 2)));
    const result_no_obstacle = Math.round(isGrass ? calculate_headwind_correction + ((calculate_headwind_correction / 100) * 20) : calculate_headwind_correction);

    const landing_no_notes50ft = landing_calc("obstacle", min_alt, max_alt, pressureAltitude);
    const calculate_headwind_correction_50ft = landing_no_notes50ft - (((landing_no_notes50ft / 100) * (headwindComponent * 2)));
    const result_obstacle_50ft = Math.round(isGrass ? calculate_headwind_correction_50ft + ((calculate_headwind_correction_50ft / 100) * 20) : calculate_headwind_correction_50ft);

    return {result_no_obstacle, result_obstacle_50ft}
}

export default Landing