import {TAKE_OFF_CHART, HEADWINDS, AGL_CHOICES, TEMP_CORRECTION} from '../../POH/TakeOffData'
import {closest, closest_not_going_over, closest_not_going_under} from "./Utils";

const based_on_wind_min = (obstacle, closest_weight, min_head, max_head, max_alt) => {
    const max = TAKE_OFF_CHART[obstacle][closest_weight][max_alt][max_head];
    const min = TAKE_OFF_CHART[obstacle][closest_weight][max_alt][min_head];
    return max - ((max - min) / (max_head - min_head));
}
const based_on_wind_max = (obstacle, closest_weight, min_head, max_head, min_alt) => {
    const max = TAKE_OFF_CHART[obstacle][closest_weight][min_alt][max_head];
    const min = TAKE_OFF_CHART[obstacle][closest_weight][min_alt][min_head];
    return max - ((max - min) / (max_head - min_head));
}

const based_on_wind_final = (closest_weight, min_alt, max_alt, result_based_on_wind_min, result_based_on_wind_max, pressureAltitude) => {
    return (((result_based_on_wind_max - result_based_on_wind_min) / (max_alt - min_alt)) * pressureAltitude) + result_based_on_wind_min;
}

const same_head_calc = (obstacle, headwindComp, closest_weight, min_alt, max_alt, pressureAltitude) => {
    const min = TAKE_OFF_CHART[obstacle][closest_weight][min_alt][headwindComp];
    return (((TAKE_OFF_CHART[obstacle][closest_weight][max_alt][headwindComp] - min) / (max_alt - min_alt)) * pressureAltitude) + min;
}

const TakeOff = (pressureAltitude, headwindComp, temperature, isGrass, grossWeight) => {
    const closest_temp = closest(AGL_CHOICES, Math.round(pressureAltitude));
    const closest_og_temp = TEMP_CORRECTION[closest_temp] - temperature;
    const temp_correct = Math.floor(Math.abs(closest_og_temp) / 25);

    const closest_weight = closest([1700, 2000, 2300], grossWeight);
    const min_alt = closest_not_going_over(AGL_CHOICES, pressureAltitude);
    const max_alt = closest_not_going_under(AGL_CHOICES, pressureAltitude);
    const min_head = closest_not_going_over(HEADWINDS, headwindComp);
    const max_head = closest_not_going_under(HEADWINDS, headwindComp);

    const same_head = min_head === max_head;
    const result_based_on_wind_max = based_on_wind_max("no-obstacle", closest_weight, min_head, max_head, min_alt);
    const result_based_on_wind_min = based_on_wind_min("no-obstacle", closest_weight, min_head, max_head, max_alt);

    const before_notes = same_head ? same_head_calc("no-obstacle", headwindComp, closest_weight, min_alt, max_alt, pressureAltitude) : based_on_wind_final(closest_weight, min_alt, max_alt, result_based_on_wind_min, result_based_on_wind_max, pressureAltitude);

    const calculate_temp_correction = before_notes + (((before_notes / 100) * 10) * temp_correct);
    const result_no_obstacle = Math.round(isGrass ? calculate_temp_correction + ((calculate_temp_correction / 100) * 7) : calculate_temp_correction);

    //With obstacle
    const result_based_on_wind_max_50ft = based_on_wind_max("obstacle", closest_weight, min_head, max_head, min_alt);
    const result_based_on_wind_min_50ft = based_on_wind_min("obstacle", closest_weight, min_head, max_head, max_alt);

    const before_notes_50ft = same_head ? same_head_calc("obstacle", headwindComp, closest_weight, min_alt, max_alt, pressureAltitude) : based_on_wind_final(closest_weight, min_alt, max_alt, result_based_on_wind_min_50ft, result_based_on_wind_max_50ft, pressureAltitude);
    const calculate_temp_correction_50ft = before_notes_50ft + (((before_notes_50ft / 100) * 10) * temp_correct);
    const result_obstacle_50ft = Math.round(isGrass ? calculate_temp_correction_50ft + ((calculate_temp_correction_50ft / 100) * 7) : calculate_temp_correction_50ft);
    return {result_no_obstacle, result_obstacle_50ft}
}

export default TakeOff