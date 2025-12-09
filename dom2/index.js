let my_element = document.createElement("div");
let my_atribute = document.createAttribute("test");
let my_text = document.createTextNode("Hiiii");
let my_element2 = document.createElement("p");
let my_text2 = document.createTextNode("paragraphe, My name is Youssef");
let my_atribute2 = document.createAttribute("size");

my_element2.className = "p1";
my_element2.setAttributeNode(my_atribute2);
my_element2.appendChild(my_text2);
document.body.appendChild(my_element2);

my_element.className = "div1";
my_element.setAttributeNode(my_atribute);
my_element.appendChild(my_text);
document.body.appendChild(my_element);



