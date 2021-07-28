const largestAltitude = (gain) => {
    let altitude = 0;
    let total = 0;
    for (x of gain) {
        total = total + x;
        if (total > altitude) {
            altitude = total;
        }
    }
    return altitude;
};

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));