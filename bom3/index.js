let list = document.querySelectorAll("ul li");
let dv = document.querySelector(".experitem");

if (window.localStorage.getItem("color")) {
        dv.style.backgroundColor = window.localStorage.getItem("color");
}else {
    console.log("no color");
}
    
list.forEach((li) => {
    li.addEventListener("click", (e) => {

        // remove active from all
        list.forEach((el) => {
            el.classList.remove("active");
        });
        // add active to current
        e.currentTarget.classList.add("active");

        // set color
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        //change color div
        dv.style.backgroundColor = e.currentTarget.dataset.color;
    });
});
