// function that returns the running sum of the numbers in
// the nums array

const runningSum = (nums) => {
    let total = 0;
    return nums.map(num => total += num);
};

console.log(runningSum([1,5,10,20]));