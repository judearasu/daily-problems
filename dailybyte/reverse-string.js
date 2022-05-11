/**
 *
This question is asked by Google. Given a string, reverse all of its characters and return the resulting string.

Ex: Given the following strings...

“Cat”, return “taC”
“The Daily Byte”, return "etyB yliaD ehT”
“civic”, return “civic”
*/

var reverseString = function (str) {
    if (!str || !str.length) {
        return null;
    }
    let outPutStr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        outPutStr += str[index];
    }
    return outPutStr;
}
input = ["Cat", "The Daily Byte", "civic"];
for (let word of input) {
    console.log(reverseString(word));
}


