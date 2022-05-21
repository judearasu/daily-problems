/**
 * This question is asked by Google. Given an array of integers, return whether or not two numbers sum to a given target, k.
Note: you may not sum a number with itself.
 */

var twoSum = function(arr, target){
    let map = new Map();
    for(let char of arr){
        const balance = target -char;
        if(map.get(char)){
            return true;
        }
        map.set(balance,char);
    }
    return false;
}

console.log(twoSum([4, 2, 6, 5, 2],4));

// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)