/**
 * Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

Ex: Given the following strings...

"USA", return true
"Calvin", return true
"compUter", return false
"coding", return true
 */

var correctCapitalization = function (str) {
    if (!str || !str.length) {
        return null;
    }

    for (let x = 0; x < str.length; x++) {
        if (str.charCodeAt(x) >= 90) {
            return false;
        }
    }
    return true;
}

inputs = ['USA', 'Calvin', 'compUter', "coding"];
for (let char of inputs) {
    console.log(correctCapitalization(char));
}
