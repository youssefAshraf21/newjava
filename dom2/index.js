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
//*******************************************
let my_product = document.createElement("div");
let my_product_heading = document.createElement("h2");
let my_product_paragraph = document.createElement("p");
// add heading and paragraph text
let my_heading_text = document.createTextNode("This is my product");
let my_paragraph_text = document.createTextNode("This product is very good");
// append text to heading and paragraph
my_product_heading.appendChild(my_heading_text);
my_product_paragraph.appendChild(my_paragraph_text);
// append heading and paragraph to product div
my_product.appendChild(my_product_heading);
my_product.appendChild(my_product_paragraph);

my_product.className = "product";

document.body.appendChild(my_product);




