let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
console.log(arrOne.concat(arrTwo).sort().reverse());
// Write One Single Line Of Code
//OR
finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]