/**This question is asked by Amazon. Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

Ex: Given the following jewels and stones...

jewels = "abc", stones = "ac", return 2
jewels = "Af", stones = "AaaddfFf", return 3
jewels = "AYOPD", stones = "ayopd", return 0
**/

var jewelStones = function (jewel, stones) {
  if (!jewel || !stones) {
    return false;
  }
  let count = 0;
  for (let x = 0; x < jewel.length; x++) {
    for (let y = 0; y < stones.length; y++) {
        if(jewel[x] === stones[y]){
            count +=1;
        }
    }
  }
  return count;
};

jewel = "AYOPD", stones = "ayopd"
console.log(jewelStones(jewel, stones));

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0
