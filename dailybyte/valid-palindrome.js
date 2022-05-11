/**
 *Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
 *Note: a palindrome is a sequence of characters that reads the same forwards and backwards.
 */

var validPalindrome = function (str) {
    str = str.replace(/\W/g, '').toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

inputs = ["level", "algorithm", "A man, a plan, a canal: Panama."];
for (let char of inputs) {
    console.log(validPalindrome(char));
}