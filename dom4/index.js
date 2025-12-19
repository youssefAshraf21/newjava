let my_button = document.getElementById("btn");

my_button.onclick = function() {
    console.log("You clicked the button!");
}

window.onscroll = function() {
    console.log("You scrolled the page!");
}
document.links[0].onclick = function(event) {
    event.preventDefault();
    console.log(event)

}
let user_input = document.querySelector("[name='username']");
let age_input = document.querySelector("[name='age']");

document.forms[1].onsubmit = function(e) {
    let user_valed = false;
    let user_age = false;

    console.log(user_input.value);
    console.log(user_input.value.length);

    if(user_input != null && user_input.value.length < 10) {
        user_valed = true;
    }

    if(age_input != null ) {
        user_age = true;
    }

    if(user_valed === false || user_age === false) {
        e.preventDefault();
    }
    else {
        e.preventDefault();
    }

}
