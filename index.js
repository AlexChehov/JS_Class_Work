
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

// функція вищого порядку

// function fn (fn1) {
//     fn1()
// }
// fn(() => console.log("Hello"));

// function fn (fn1,message) {
//     fn1(message)
// }
// fn((msg) => console.log(msg),"Hello world");


// function fn (H1,auto) {
//     H1(auto)
// }
// fn((Halo) => console.log(Halo),"Hello Hallo");

// function fn (fn1,str) {
//     return fn1(str)
// }
// console.log(fn((riprip) => riprip.toUpperCase(),"Hello world"));


// Array.prototype.forEach2 = function (fn) {
//     for (let i = 0; i < this.length; i = i + 1) {
//         fn(this[i], i, this);
//     }
// }

// const arr = [1,2,3,4,5];
// arr.forEach2((e,i,arr) => console.log(e,i,arr) );

// [1,2,3].map((e,i,arr) => e.toString());


// const arr = [1,2,3,4,5];
// Array.prototype.map2 = function (fn) {
//     const result = [];
//     for (let i = 0; i < this.length; i = i + 1) {
//         const newElement = fn(this[i],i,arr);
//         result.push(newElement);
//     }
//     return result;
// };
// console.log([1,2,3].map2((e,i,arr) => e.toString()));


// Array.prototype.myReduce = function (fn) {
//     var a = 0;
//     for (let i = 0; i < this.length; i++) {
//         fn(a = a + this[i])
//     }
//     return a;
// }

// const arr = [1, 2, 3, 4, 5];

// const res = arr.myReduce((acc, i) => acc + i)
// console.log(res);

// function sum (fn1, fn2) {
//     return fn1(10) + fn2(40);
// }
// console.log(sum ((fn1 = (a) => a), (fn2 = (b) => b)));

// const arr = [1, 2, 3, 4, 5];

// function reduce2(acc, e, i) {
//     const a = acc + e;
//     `acc: ${acc}, e: ${e}, i: ${i}, a: ${a}`;
//     return a;
// }

// console.log(arr.reduce((acc, i) => acc+i));

// console.log(     [1,2,3].reduce((acc,e,i,arr) => acc = acc + e , 0)      );

Array.prototype.reduce2 = function (fn, acc = 0) {
  
    for (let i = 0; i < this.length; i = i + 1) {
        acc = fn(acc, this[i], i, this);
    }
    return acc;
};
console.log([1, 2, 3].reduce2((acc, e,) => acc = acc + e));