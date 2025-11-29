// <li>TS</li>
// created an Element....
const element = document.createElement('li');
element .innerHTML= "TS";

const parent = document.getElementById("root");
parent.appendChild(element);

// created an element 
function attach(content){
    const element = document.createElement('li');
    element.innerHTML = content;

    const element2 = document.createElement('li');
    element2.innerHTML = content+"V2.0";

    const parent = document.getElementById("root");
    parent.appendChild(element);
};
attach("TS");
attach("React");
attach("Node");

const element = document.createTextNode("Hello Coder Army");
const parent = document.getElementById("root");
parent.append(element);

// ************* Attribute Node ************
const element = document.createAttribute("id");
element.value = "first";

const curr_list = document.querySelector('li');
curr_list.setAttribute(element);

// Access to second list.

const parent = document.getElementById("root");
parent.children[1].setAttributeNode(element);

// Access element of a element 

const element = document.getElementById("root");
console.log(element.getAttribute("style"));
element.setAttribute("Cutomer", "20");
element.setAttribute("Faheem", "21");
element.setAttribute("Gulafshan", "24");
element.setAttribute("Class", "Rohan");


// ************* Add Node to the DOM ************
const parent = document.getElementById("root");
const element = document.createElement('li');
element.innerHTML = "TS";

parent.prepend(element);
parent.append(element);

const child2 = parent.children[1];
parent.insertBefore(element, child2);
parent.replaceChild(element, child2);

const parent = document.getElementById("root");
parent.innerHTML = "<li>TS</li>";

parent.insertAdjacentElement("beforebegin", element);
parent.insertAdjacentElement("afterbegin", element);