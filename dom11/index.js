let myp = document.querySelector("p");
// myp.onclick = one;
// myp.onclick = two;

// function one() {
//     console.log("one clicked");
// }
// function two() {
//     console.log("two clicked");
// }
// myp.addEventListener("click", function(){
//     console.log("one clicked event listener");
// });
// myp.addEventListener("click", one);
// myp.addEventListener("click", two);

myp.onclick = function(){
    let mynewp = myp.cloneNode(true);
    mynewp.className = 'cloned';
    document.body.appendChild(mynewp);
}
// let cloned = document.querySelector(".cloned");
// cloned.onclick = function(){
//     console.log("cloned clicked");
// }
document.addEventListener("click", function(e){
    if(e.target.className=== "cloned"){
        console.log("im cloned clicked");
    }
})
