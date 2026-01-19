let arr1 = ["Ahmed", "Sayed", "Ali", "Maysa"];
let [a , b, c, d] = arr1;

console.log(a); // "Ahmed"
console.log(b); // "Sayed"
console.log(c); // "Ali"
console.log(d); // "Maysa"

let [x, ,y, ] = arr1;

console.log(x);
console.log(y);