let getElById = document.getElementById("my-div");
let getElByTagName = document.getElementsByTagName("p");
let getElByClassName = document.getElementsByClassName("my-span");
let getElByQuerySelector = document.querySelector("a");
let getElByQuerySelectors = document.querySelectorAll("a");

console.log(getElByQuerySelector);
console.log(getElByClassName);
console.log(getElByTagName[1]);
console.log(getElById);
console.log(getElByQuerySelectors[1]);
console.log(document.title);
console.log(document.forms[0]);