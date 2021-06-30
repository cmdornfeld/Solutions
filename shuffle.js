const shuffle = (nums, n) => {
    let resultArr = [];
    for (let i=0; i<n; i++) {
        resultArr.push(nums[i], nums[i+n])
    }
    return resultArr;
};

console.log(shuffle([2,5,1,3,4,7], 3));