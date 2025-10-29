function multiply(...args) {
let result = 1;
let hasNumber = false;

for (let arg of args) {
    if (typeof arg === "number") {
    hasNumber = true;
      result *= parseInt(arg); // تحويل float إلى integer
    }
}

return hasNumber ? result : 0;
}

console.log(multiply(10, 20));            // 200
console.log(multiply("A", 10, 30));       // 300
console.log(multiply(100.5, 10, "B"));    // 1000
