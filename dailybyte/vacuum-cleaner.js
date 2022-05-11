/**
 *Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
Ex: Given the following strings...

"LR", return true
"URURD", return false
"RUULLDRD", return true
 */

var vacuumCleaner = function (moves) {
    let UD = 0;
    let LR = 0;
    for (let x = 0; x < moves.length; x++) {
        const currentMove = moves.charAt(x);
        if (currentMove === 'U') {
            UD++;
        } else if (currentMove === 'D') {
            UD--;
        } else if (currentMove === 'L') {
            LR++;
        } else if (currentMove === 'R') {
            LR--;
        }
    }

    return LR === 0 && UD === 0;
}
inputs = ["LR", "URURD", "RUULLDRD"]
for (let char of inputs) {
    console.log(vacuumCleaner(char));
}
