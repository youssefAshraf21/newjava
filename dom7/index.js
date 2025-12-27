let elm = document.getElementById("my_div");
elm.style.cssText = "text-decoration: underline; background-color: black; opacity: 0.8;"; 
elm.style.color = "red";
elm.style.fontWeight = "bold";
elm.style.removeProperty("opacity");
elm.style.setProperty("font-size", "80px" , "important");
document.styleSheets[0].rules[0].style.setProperty("line-height", "5" , "important");
