/*=========================================================
                    WINDOW OBJECT
=========================================================

-> The browser automatically creates the Window object.
-> It is the global object in JavaScript.
-> All global variables and functions become members of the window object.

Example:
window.alert("Hello");
alert("Hello"); // Same as window.alert("Hello")

=========================================================
                    DOM (Document Object Model)
=========================================================

-> When a web page is loaded, the browser creates the DOM.
-> The DOM represents the HTML document as a tree structure.
-> JavaScript can access and modify the DOM dynamically.

console.log(document);   // Prints the document
console.dir(document);   // Prints the document object with all its properties

=========================================================
            console.log() vs console.dir()
=========================================================

console.log() is used to print general values like strings,
numbers, arrays, objects, etc.

console.dir() is mainly used to inspect an object's properties
in detail. It shows the object in a tree-like format, making
it easier to understand nested properties.

Use console.log() for general debugging.
Use console.dir() when working with DOM objects.

=========================================================
                DOM MANIPULATION
=========================================================

Selecting Elements

1. By ID
document.getElementById("idName");

2. By Class Name
document.getElementsByClassName("className");

3. By Tag Name
document.getElementsByTagName("tagName");

4. Query Selector (Most Used)
document.querySelector("selector");
document.querySelectorAll("selector");

=========================================================
                IMPORTANT PROPERTIES
=========================================================

tagName
-> Returns the tag name of an element.

innerText
-> Returns visible text only.
-> Can also change the visible text.

innerHTML
-> Returns HTML along with text.
-> Can also insert HTML.

textContent
-> Returns all textual content, including hidden text.

=========================================================
                DOM ATTRIBUTES
=========================================================

getAttribute(attr)
-> Returns the value of an attribute.

setAttribute(attr, value)
-> Sets or updates an attribute.

=========================================================
                STYLING ELEMENTS
=========================================================

node.style.property = value;

Example:
element.style.color = "red";
element.style.backgroundColor = "yellow";

=========================================================
                CREATING ELEMENTS
=========================================================

let element = document.createElement("div");

=========================================================
                INSERTING ELEMENTS
=========================================================

node.append(element);
-> Adds at the end (inside the node).

node.prepend(element);
-> Adds at the beginning (inside the node).

node.before(element);
-> Adds before the node (outside).

node.after(element);
-> Adds after the node (outside).

=========================================================
                REMOVING ELEMENTS
=========================================================

node.remove();
*/

console.dir(document);

// =========================================================
// PRACTICE 1
// Create an h2 heading element with text:
// "Hello JavaScript"
// Append "from Apna College Students" to this text using JS.
// =========================================================

let h2 = document.querySelector("h2");

console.log(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Students";


// =========================================================
// PRACTICE 2
// Create 3 divs with a common class name "box".
// Access them using JavaScript and add unique text
// to each of them.
// =========================================================

let divs = document.querySelectorAll(".box");

console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

let idx = 1;

for (let div of divs) {
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}


// =========================================================
// PRACTICE 3
// Create a new button element.
// Give it the text "Click Me!".
// Set background color to red and text color to white.
// Insert it at the beginning of the body.
// =========================================================

let newButton = document.createElement("button");

newButton.innerText = "Click Me!";

newButton.style.color = "white";
newButton.style.backgroundColor = "red";

document.querySelector("body").prepend(newButton);


// =========================================================
// PRACTICE 4
// Create a new class in CSS and append it
// to the paragraph without removing the old class.
// =========================================================

let para = document.querySelector("p");

para.classList.add("newClass");


/*=========================================================
                EXTRA NOTES
=========================================================

Difference between querySelector() and querySelectorAll()

querySelector()
-> Returns the first matching element.

querySelectorAll()
-> Returns all matching elements.
-> Returns a NodeList.

--------------------------------------------

HTMLCollection vs NodeList

HTMLCollection
- Returned by getElementsByClassName()
- Returned by getElementsByTagName()
- Live Collection

NodeList
- Returned by querySelectorAll()
- Static Collection

--------------------------------------------

innerText vs textContent

innerText
- Returns only visible text.

textContent
- Returns all text including hidden text.

--------------------------------------------

innerHTML

Reads or writes HTML.

Example:
element.innerHTML = "<h1>Hello</h1>";

--------------------------------------------

append()
-> Inserts at the end.

prepend()
-> Inserts at the beginning.

before()
-> Inserts before the selected element.

after()
-> Inserts after the selected element.

--------------------------------------------

remove()
-> Deletes the selected element.

=========================================================
                REMEMBER
=========================================================

✓ window is the global object.
✓ DOM is created by the browser.
✓ JavaScript changes HTML, CSS, and attributes dynamically.
✓ querySelector() is the most commonly used selector.
✓ innerText changes visible text.
✓ innerHTML changes HTML.
✓ style is used to change CSS.
✓ createElement() creates a new element.
✓ append(), prepend(), before(), after() insert elements.
✓ remove() deletes an element.
✓ classList.add() adds a class without removing existing classes.

=========================================================*/