/**
 * This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
Note: a palindrome is a sequence of characters that reads the same forwards and backwards.
 */

var validPalindromeII = function(str){
    let i=0;
    let j=str.length -1;
    while(i < j){
        if(str.charAt(i) !== str.charAt(j)){
            return checkPalindrome(str,i,j-1) || checkPalindrome(str, i+1,j)
        }
        i++;
        j--;
    }
    return true;
}

var checkPalindrome= function(str, i, j){
    while(i<j){
            if(str.charAt(i) !== str.charAt(j)){
                return false;
            }
            i++;
            j--;
    }
    return true;
}

inputs = ["abcba", "foobof", "abccab"];
for (let char of inputs) {
    console.log(validPalindromeII(char));
}
