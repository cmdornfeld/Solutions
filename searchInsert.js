function searchInsert(nums, target) {
    if(target > nums[nums.length-1]){
        return nums.length;
    }
    for(let i=0; i<nums.length; i++){
        if(target <= nums[i]){
            return i;
        }
    }
};