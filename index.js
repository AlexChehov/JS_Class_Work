
// const arr1 = [{ name: "Igor", age: 20 }, { name: "Oleg", age: 40 }];

// const result = arr1.map((obj) => {
//     const resultElement = [];
//     for (let key in obj) {
//         resultElement.push(key);
//         resultElement.push(obj[key]);
//     }
//     return resultElement;
// }).flat();

// console.log(result, "RESULT");

// const result1 = arr1.reduce((acc, el, i, result) => {
//     result[i + 1] && acc.push([el, result[i + 1]]);
//     return acc;
// }, []);
// console.log(result1.filter((e, i) => !Boolean(i % 2)), "RESULT2");

// console.log(arr1.map((obj) => Object.entries(obj)).flat());


//FUNCTION

// function keys(obj) {
//     return Object.keys(obj);
// }
// console.log(keys({name:"Igor", age:23}),"result"); 

// function main() { } //function declaration 
// const main2 = function () { }  // function expression
// const main3 = () => { } //function arrow

// this.console.log();
// window.console.log();

// function car(name, price, color) {
//     console.log(this, "this")
//     return {
//         name, price, color, showCar: function () {
//             console.log(this, "this1")
//         }
//     };
// }
// const car1 = car("Mazda", 1500, "Black");
// car1.showCar();


// 1. написати стрілочну функцію що повертає результат 
// від ділення більшого з 2 переданих чисел на менше

// if () {}

// const fn = (a, b) => {
//     if(a > b){
//           return a / b;
//     } else return b / a;
//   };


// const dividedNum = (a, b) => {
//     if (a > b) {
//         return a/b
//     }
//     else return b/a
// }


// function a (a) {
//     return function (b) {
//     return function (c) {}
//     }
// }

// a(a)(b)(c);

// (function main(text) { alert(text);
// })("Hello");

// function Car(name, price, color) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.showcar = function () {
//         console.log(this);
//     }
//     return this;
// }

// Car.prototype.show2 = function () {
//     console.log(this.name,"name");
// }

// const car1 = new Car("Ford", 50000, "green")
// console.log(car1);
// car1.showcar();
// car1.show2();