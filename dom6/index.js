let elm = document.getElementById("my_div");

console.log(elm.classList);
console.log(typeof elm.classList);
console.log(elm.classList.contains("joo"));
console.log(elm.classList.contains("show"));
console.log(elm.classList.item(1));
elm.onclick = function() {
    elm.classList.add("new_class_one", "new_class_two");
}
//remove()is the same , but it remove 
elm.onclick = function() {
    elm.classList.toggle("toggle_class");
    //toggle the class if it exists remove it else add it
}

