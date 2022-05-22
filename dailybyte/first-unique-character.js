/**
 * First Unique Character
This question is asked by Microsoft. Given a string, return the index of its first unique character. 
If a unique character does not exist, return -1.

Ex: Given the following strings...

"abcabd", return 2
"thedailybyte", return 1
"developer", return 0
 */

var firstUniqueCharacter = function (str) {
  let wordMap = new Map();
  for (let x = 0; x < str.length; x++) {
    if (wordMap.has(str[x])) {
      wordMap.set(str[x], wordMap.get(str[x]) + 1);
    } else {
      wordMap.set(str[x], 1);
    }
  }

  for (let char of str) {
    if (wordMap.get(char) === 1) {
      return str.indexOf(char);
    }
  }
  return -1;
};

// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0
str = "loveleetcode";
console.log(firstUniqueCharacter(str));
