// let conf = confirm("are you sure you want to delete this page?");
// if(conf === true){
//     console.log("page deleted");
// }else{
//     console.log("page not deleted");
// }
// let prom = prompt("enter your name","max lenth 4 letters");
// console.log(prom);

// setTimeout(function(){
//     console.log("hello after 3 seconds");
// },3000);

// setTimeout(saymsg,3000, "youssef", 25); 
// function saymsg(user,age){
//     console.log(`this meesage for ${user} and age is ${age}`);
// }

//     let counter = setTimeout(saymsg,3000); 
// function saymsg(){
//     console.log("this meesage");
// }   

// let btn = document.querySelector("button");
// btn.onclick = function(){
//     clearTimeout(counter);
// }

let div = document.querySelector("div");
function countdown(){
    div.innerHTML -= 1;
    if(div.innerHTML === "0"){
        clearInterval(counter);
    }
}
let counter = setInterval(countdown,1000); 
