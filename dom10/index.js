let myp = document.querySelector("p").cloneNode(true);
let mydiv = document.querySelector("div");
myp.id = '${myp.id}-clone';

mydiv.appendChild(myp);