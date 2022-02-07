import pressureAltitude from "./PressureAltitude";

const TAKE_OFF_CHART = {
    "no-obstacle": {
        2300: {
            0: {
                0: 865, 10: 615, 20: 405
            }, 2500: {
                0: 1040, 10: 750, 20: 505,
            }, 5000: {
                0: 1255, 10: 920, 20: 630,
            }, 7500: {
                0: 1565, 10: 1160, 20: 810,
            }
        }, 2000: {
            0: {
                0: 630, 10: 435, 20: 275
            }, 2500: {
                0: 755, 10: 530, 20: 340,
            }, 5000: {
                0: 905, 10: 645, 20: 425,
            }, 7500: {
                0: 1120, 10: 810, 20: 595,
            }
        }, 1700: {
            0: {
                0: 435, 10: 290, 20: 175
            }, 2500: {
                0: 520, 10: 355, 20: 215,
            }, 5000: {
                0: 625, 10: 430, 20: 270,
            }, 7500: {
                0: 765, 10: 535, 20: 345,
            }
        }
    }, "obstacle": {
        2300: {
            0: {
                0: 1525, 10: 1170, 20: 850
            }, 2500: {
                0: 1910, 10: 1485, 20: 1100,
            }, 5000: {
                0: 2480, 10: 1955, 20: 1480,
            }, 7500: {
                0: 3855, 10: 3110, 20: 2425,
            }
        }, 2000: {
            0: {
                0: 1095, 10: 820, 20: 580
            }, 2500: {
                0: 1325, 10: 1005, 20: 720,
            }, 5000: {
                0: 1625, 10: 1250, 20: 910,
            }, 7500: {
                0: 2155, 10: 1685, 20: 1255,
            }
        }, 1700: {
            0: {
                0: 780, 10: 570, 20: 385
            }, 2500: {
                0: 920, 10: 680, 20: 470,
            }, 5000: {
                0: 1095, 10: 820, 20: 575,
            }, 7500: {
                0: 1370, 10: 1040, 20: 745,
            }
        }
    },
}
const TEMP_CORRECTION = {
    0: 59, 2500: 50, 5000: 41, 7500: 32
}

const AGL_CHOICES = [0, 2500, 5000, 7500]
const HEADWINDS = [0, 10, 20]

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