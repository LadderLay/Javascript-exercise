var containsDuplicate = function(nums) {
    let res = [...new Set(nums)];
    if(nums.length <= 1 || nums.length == res.length) return false;
    return true;
};