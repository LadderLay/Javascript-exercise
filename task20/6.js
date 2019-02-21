//6,wrong
const intersection = function (nums1, nums2) {
    let array = [];
    nums1.sort();
    nums2.sort();
    for(let x in nums1){
        for(let y in nums2){
            if((nums1[x] === nums2[y]) && (array.indexOf(nums1[x]) == -1)){
                array.push(nums1[x]);
                break;
            }
        }
    }
    array.sort(function(a,b){return a-b});
    return array;
}