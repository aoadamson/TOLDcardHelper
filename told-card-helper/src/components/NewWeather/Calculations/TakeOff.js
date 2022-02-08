import {TAKE_OFF_CHART, HEADWINDS, AGL_CHOICES, TEMP_CORRECTION} from '../../POH/TakeOffData'

const closest = (arr, num) => {
    return arr.reduce((acc, val) => {
        if (Math.abs(val - num) < Math.abs(acc)) {
            return val - num;
        } else {
            return acc;
        }
    }, Infinity) + num;
}
const closest_not_going_over = (arr, num) => {
    let sorted = arr.sort().reverse();
    return sorted.filter(n => n <= num)[0]
}
const closest_not_going_under = (arr, num) => {
    let sorted = arr.sort()
    return sorted.filter(n => n >= num)[0]
}

const based_on_wind_min = (closest_weight, min_head, max_head, max_alt) => {
    const max = TAKE_OFF_CHART["no-obstacle"][closest_weight][max_alt][max_head];
    const min = TAKE_OFF_CHART["no-obstacle"][closest_weight][max_alt][min_head];
    return max - ((max - min) / (max_head - min_head));
}
const based_on_wind_max = (closest_weight, min_head, max_head, min_alt) => {
    const max = TAKE_OFF_CHART["no-obstacle"][closest_weight][min_alt][max_head];
    const min = TAKE_OFF_CHART["no-obstacle"][closest_weight][min_alt][min_head];
    return max - ((max - min) / (max_head - min_head));
}

const based_on_wind_final = (closest_weight, min_alt, max_alt, pressureAltitude) => {

    return (((max_alt - min_alt) / (max_alt - min_alt)) * pressureAltitude) + min_alt;
}


const same_head_calc = (headwindComp, closest_weight, min_alt, max_alt, pressureAltitude) => {
    const min = TAKE_OFF_CHART["no-obstacle"][closest_weight][min_alt][headwindComp];
    return (((TAKE_OFF_CHART["no-obstacle"][closest_weight][max_alt][headwindComp] - min) / (max_alt - min_alt)) * pressureAltitude) + min;
}


const TakeOff = (pressureAltitude, headwindComp, temperature, isGrass, grossWeight) => {
    const closest_temp = closest(AGL_CHOICES, pressureAltitude);
    const temp_correct = Math.floor(Math.abs(TEMP_CORRECTION[closest_temp] - temperature) / 25);
    const closest_weight = closest([1700, 2000, 2300], grossWeight);
    const min_alt = closest_not_going_over(AGL_CHOICES, pressureAltitude);
    const max_alt = closest_not_going_under(AGL_CHOICES, pressureAltitude);
    const min_head = closest_not_going_over(HEADWINDS, headwindComp);
    const max_head = closest_not_going_under(HEADWINDS, headwindComp);
    const same_head = min_head === max_head;
    const result_based_on_wind_max = based_on_wind_max(closest_weight, min_head, max_head, min_alt);
    const result_based_on_wind_min = based_on_wind_min(closest_weight, min_head, max_head, max_alt);

    const before_notes = same_head ? same_head_calc(headwindComp, closest_weight, min_alt, max_alt, pressureAltitude) : based_on_wind_final(closest_weight, result_based_on_wind_min, result_based_on_wind_max, pressureAltitude);
    console.log(before_notes)
    const calculate_temp_correction = before_notes + ((.10 * before_notes) * temp_correct);
    console.log(calculate_temp_correction)
    return isGrass ? calculate_temp_correction + (.7 * calculate_temp_correction) : calculate_temp_correction;

}

export default TakeOff