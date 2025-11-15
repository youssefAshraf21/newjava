let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let result = numsAndStrings.filter(function(ele){
    return typeof ele === "number";
}).map(function(ele){
    return ele * -1;
});

console.log(result);
// [-1, -10, 10, 20, -5, -3]