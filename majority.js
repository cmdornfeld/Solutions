function majorityElement(nums) {
    const numObj = {};
    for(let i of nums){
        if(numObj[i]){
            numObj[i]++;
        }
        else {
            numObj[i] = 1;
        }
        if(numObj[i] > nums.length / 2){
            return i;
        }
    }
};