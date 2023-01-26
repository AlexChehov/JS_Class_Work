// масив
// const arr = [1,10,"Hello"];
// console.log(arr[0],arr[1],arr[2],arr.length);
// const obj = {};
// const arr2 = new Array([]);
// const names = ["Igor" , "Oleg", "Alex" ] ;
// const ages = [23,20,34];
// names[names.length]="Olena";
// console.log(names,names.slice((0,2)));
// console.log(names.concat(["Vitaliy","Vika"]));
// console.log(names.includes("Igor"), "includes");
// console.log(names.indexOf("Alex"),"index");
// delete names[0];
// console.log(names);
// console.log(names[0],ages[0]);

// const names = ["Igor","Oleg","Alex"];
// names.push("Vika");
// names.shift();
// names.pop("");
// console.log(names);

// const arr = ["Igor","Oleg","Alex"];

// arr.unshift("Alex");
// arr.pop([3]);

// arr.unshift(arr.pop());

// const arr2 = ["Kyiv","Lviv","Odessa"];
// console.log(arr2.indexOf("Lviv"),"index");

// console.log(arr2[arr2.indexOf("Lviv")])
// console.log(arr2);

// const arr3 =["Ford","Mazda","Lincoln","Pontiac","Lexus"];
// for (let i = 0; i < arr3.length; i++){
//    if (arr3[i].includes("L")){
//         console.log(arr3[i])
// };

// const arr3 = ["Ford", "Mazda", "Lincoln", "Pontiac", "Lexus"];
// for (let el of arr3) {
//     if (el.includes("L")) {
//         console.log(el)
//     }
// }
// const arr3 = ["Ford", "Mazda", "Lincoln", "Pontiac", "Lexus"];
// arr3.forEach(function (el, i, err) {
//     console.log("Hello", el, i, err);
// })
// arr3.forEach((el, i, arr) => {
//     console.log("Hello", el, i);
// });

// const arr3 = ["Ford", "Mazda", "Lincoln", "Pontiac", "Lexus"];
// arr3.forEach((el) => {
//     if (el.includes("L")) {
//         console.log(el);
//     }
// });

// const arr4 = [10, 30, 2, 5, 9];
// let sum = 0;

// console.log(arr4.reduce((total, el) => {
//     return total + el
// }));

 
// for (let i = 0; i < arr4.length; i = i + 1) {
//     sum = sum + arr4[i];
// }
// console.log(sum);

// const arr5 = [
//     { name: "Igor", age: 40 },
//     { name: "Oleg", age: 34 },
//     { name: "Misha", age: 10 },
//   ];

//   const result =[];
//   arr5.forEach((el) => {
//     if(el.age > 10){
//         result.push(el);
//     }
//   });
//   console.log(result)
  