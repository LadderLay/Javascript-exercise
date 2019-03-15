//垃圾写法...
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && j - i <= k)
                return true;
        }
    }
    return false;
};