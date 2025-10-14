let start = 0;
let swappedName = "elZerO";
let result = "";
for (let i =start; i < swappedName.length; i++) {
    let char = swappedName[i];
    if (char === char.toUpperCase()) {
        result += char.toLowerCase();
    } else {
        result += char.toUpperCase();
    }
}
console.log(result);
// Output
"ELzERo"