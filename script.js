// var x = 19;
// var x = "Mohamed";
// console.log(x);

// let y = 19;
// y = "Simo";
// console.log(y);

// const z = 28;
// console.log(z);

// var a = 10;
// var b = "10";

// console.log(a);

// console.log(b);

// console.log(a !== b);

//les méthodes
// console.log("Hello World");
// alert("Hello from alert");
// prompt("What is your name?");
// var x = confirm("Are you sure?");
// console.log(x);

// var name = "Hello World";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.indexOf("o"));
// console.log(name.slice(0, 5));

//DOM

// var mainEl = document.getElementById("main-paragraph");

// console.log("el:", mainEl);

// var elClassName = mainEl.getAttribute("class");

// console.log("elClassName:", elClassName);

////////////////////////////////////////////

// var x = document.getElementById("without-style");

// console.log("el:", x);

// var y = x.getAttribute("class");

// console.log("y est :", y);

//Styling DOM Elements

// Selecting element

// var x = document.getElementById("intro");

// // Appling styles on element

// x.style.color = "blue";
// x.style.fontSize = "18px";
// x.style.fontWeight = "bold";
// x.style.backgroundColor = "yellow";

// console.log("x:", x);

//Adding Elements
// Creating a new div element
// var x = document.createElement("div");
// // Creating a text node
// var y = document.createTextNode("Hi, how are you doing?");
// // Adding the text node to the newly created div
// x.appendChild(y);
// // Adding the newly created element and its content into the DOM
// var z = document.getElementById("main");
// z.appendChild(x);

//Getting or Setting HTML Contents to DOM
// Getting inner HTML conents
// var contents = document.getElementById("main").innerHTML;
// console.log("contents", contents);

// // Setting inner HTML contents
// var mainDiv = document.getElementById("main");
// mainDiv.innerHTML = "<p>This is <em>newly inserted</em> paragraph.</p>";

//Remove Elements
var x = document.getElementById("main");

var y = document.getElementById("hint");

x.removeChild(y);

console.log("parentElem", x);
