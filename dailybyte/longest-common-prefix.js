/**
 * Given an array of strings, return the longest common prefix that is shared amongst all strings.
Note: you may assume all strings only contain lowercase alphabetical characters.
 */

var longestCommonPrefix = function (strArr) {
    const size = strArr.length;
    let res = [];
    if (size === 0) {
        return "";
    } else if (size === 1) {
        return strArr[0];
    } else {
        strArr = strArr.sort();
        const length = strArr[0].length;
        for (let x = 0; x < length; x++) {
            if (strArr[0].charAt(x) === strArr[size - 1].charAt(x)) {
                res.push(strArr[0].charAt(x));
            }
        }
    }
    return res.join('');
}

console.log(longestCommonPrefix(["colorado", "color", "cold"]))