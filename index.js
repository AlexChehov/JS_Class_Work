// Document Object Model - DOM


// const h1 = document.getElementById("h1");
// console.log(h1);
// h1.textContent = "Hello world";


// const spans = document.getElementsByTagName("span");
// console.log(spans);

// const spansWithNames = document.getElementsByName("span");
// [...spansWithNames].forEach((el) => el.style.color = "red");


// [...spans].forEach((el,i) => {
// el.textContent = i;
// });

// const allElements = [...document.querySelectorAll("*")];
// allElements.forEach((el) => el.style.fontSize = "50px");


// let counter = 0;

// const button = document.createElement("button");
// button.textContent = "Button";
// document.body.appendChild(button);

// button.onclick = () => {
//     counter = counter + 1;
//     h1.textContent = counter;
// };


// const button2 = document.createElement("button2");
// button2.textContent = "Button2";
// document.body.appendChild(button2);

// button2.onclick = () => {
//     counter = counter - 1;
//     h1.textContent = counter;
// };

// const h1 = document.querySelector("h1");
// const incrementButton = document.querySelector("#increment");
// const decrementButton = document.querySelector("#decrement");
// const resetButton = document.querySelector("#reset");

// let counter = 0;

// incrementButton.onclick = () => {
//     counter = counter + 1;
//     h1.textContent = counter;
// }

// decrementButton.onclick = () => {
//     counter = counter - 1;
//     h1.textContent = counter;
// }

// resetButton.onclick = () => {
//     counter = 0
//     h1.textContent = counter;
// }

// const interseptcounter = () => {
//     document.body.style.background = `rgb(${counter * 10}, 
//     ${counter * 10}, ${counter * 10})`;
// };
const addSqeridButton = document.getElementById("addSqerid");

class Square {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.element = document.createElement("div");
        this.element.style.width = this.size + "px";
        this.element.style.height = this.size + "px";
        this.element.style.background = this.color;
    }
    render (htmlElement) {
        htmlElement.appendChild(this.element);
    }
};

addSqeridButton.onclick = () => {
const square = new Square(100, "black");
square.render(document.body);
}