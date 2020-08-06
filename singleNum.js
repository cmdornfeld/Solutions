function singleNumber(nums) {
    const numCount = nums.reduce(function (allNums, num){
        if(num in allNums){
            allNums[num]++;
        }
        else {
            allNums[num] = 1;
        }
        return allNums;
    }, {});
    for(let key in numCount){
        if(numCount[key] === 1){
            return key;
        }
    }
};
