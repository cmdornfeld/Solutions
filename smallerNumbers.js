const smallerNumbersThanCurrent = (nums) => {
    let result = [];
    for (i of nums) {
        let count = 0;
        for (j of nums) {
            if (i !== j && i > j) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
};