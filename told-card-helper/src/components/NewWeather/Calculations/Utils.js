export const closest = (arr, num) => {
    return arr.reduce((acc, val) => {
        if (Math.abs(val - num) < Math.abs(acc)) {
            return val - num;
        } else {
            return acc;
        }
    }, Infinity) + num;
}
export const closest_not_going_over = (arr, num) => {
    let sorted = arr.sort().reverse();
    return sorted.filter(n => n <= num)[0]
}
export const closest_not_going_under = (arr, num) => {
    let sorted = arr.sort()
    return sorted.filter(n => n >= num)[0]
}