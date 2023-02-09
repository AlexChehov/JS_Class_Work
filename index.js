// const arr1 = ["Poland","Ukraine","USA"];
// arr1.forEach((e,i)=>{
//     arr1[i] = e[0]
// });
// console.log(arr1);

// const arr = [1,5,17,4,8,6,7,0];
// const arr2 = ["bananna","animal","flower"];

// console.log(arr.sort((e1,e2) => e1 - e2),arr);
// console.log(arr2.sort((e1,e2) => e1.localeCompare(e2)));

// console.log("bananna".localeCompare("animal"),"locail compair")

// const arr3 = [
//     { name: "Yarik", age: 93 },
//     { name: "Igor", age: 73 },
//     { name: "Oleg", age: 43 },
//     { name: "Olena", age: 23 },
// ];
// console.log(arr3.sort((e1, e2) => e1.name.localeCompare(e2.name)));

// function fn1 (
// arguments
// ) {
//  body
//return value
// }                         //functiondeclaration
// const fn2 = function () [] ;

// const helloFunction = function() {
//     const a = 10;
//     const b = 15;
//     alert(`Hello ${ a+b }`);
// };
// helloFunction();

// const sum = function(a,b) {
//     alert(`Hello ${ a+b }`);
// };
// sum(10,15);

// const sum = function(a,b) {
//     alert(`Hello ${ a+b }`);
// };
// const num1 = 100;
// const num2 = 1000;
// sum(num1,num2);

// Написати функцію, що приймає сторони прямокутника та рахує та виводить його площу та переметр

// const num1 = function (a, b) {
//     alert( a*b )
//     alert(( a+b ) * 2)
// };
// const up = 4;
// const side = 7;
// num1(up, side);

//Написати функцію що приймає у аргументи name, surname, age та повертає 
// object з одноіменними полями
// {name: "Igor", surname: "Sergienko", age: 23}

// function createPerson(name, surname, age) {
//     return {
//         name,
//         surname,
//         age
//     };
// }
// const name = createPerson("Igor", "Sergienko", 23);
// console.log(name);

// Написати функцію яка створює машину за переданими параметрами name, price, color

function createCar(name, price, color) {
    return {
        name,
        price,
        color,
        discaunt: function () {
            return (price - (price * 0.1));
        },
        newPrice: function (price2) {
            return {name, color, price:price2};
        }
    };
}
const car = createCar("Ravon", 12000, "black");
console.log(car.discaunt());
console.log(car.newPrice(100000));




