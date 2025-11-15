let myString = "EElllzzzzzzzeroo";

let newWord = myString.split("").filter(function(ele, index, arr){
    return arr.indexOf(ele) === index;
}).join("");

console.log(newWord); // r

// Elzero