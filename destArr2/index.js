let arr1 = ["ahmed", "sayed", "ali", ["mohamed", "eman",["noha", "shady"]]];
// console.log(arr1[3][2][1]);
let [ , , , [a , ,[ , b]]] = arr1;

console.log(a); // "mohamed"
console.log(b); // "shady"