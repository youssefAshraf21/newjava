let span = document.querySelector(".two");
console.log(span.nextElementSibling);
console.log(span.nextSibling);
console.log(span.parentElement);
span.onclick = function() {
    span.parentElement.style.color = "red";
}