const numIdenticalPairs = (nums) => {
    let matches = 0;
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) {
                matches += 1;
            }
        }
    }
    return matches;
};