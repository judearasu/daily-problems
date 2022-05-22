/**
 * This question is asked by Google. Given two integer arrays, return their intersection.
Note: the intersection is the set of elements that are common to both arrays.

Ex: Given the following arrays...

nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
 */

var intersectionNumbers = function(nums1, nums2){
    // const intersect = [];

    // for(let x=0; x < nums2.length; x++){
    //     if(nums1.includes(nums2[x])){
    //         if(!intersect.includes(nums2[x])){
    //             intersect.push(nums2[x]);
    //         }
    //     }
    // }
    // return intersect;

    // Optimized approach
    let map = new Map();
    const result = [];

    for(let char of nums1){
       map.set(char, true);
    }
    for(let char of nums2){
        if(map.has(char) && !result.includes(char)){
            result.push(char);
        }
    }
    return result;
}

nums1 = [1, 2, 3, 3]; nums2 = [3,3];
console.log(intersectionNumbers(nums1, nums2));