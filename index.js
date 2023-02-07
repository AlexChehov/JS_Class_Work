// const arr = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8]

// ];
// const res = arr.find((arreyElement) => arreyElement.includes(7));
// console.log(Boolean(res),res);

// const res2 = arr.some((arreyElement)=>arreyElement.includes(7));
// console.log(res2,"RES2");

// const arr3 = [
//     [1,2],
//     [3,4],
//     [5,6],
//     [7,8]

// ];
// let sum = 0;
// arr.forEach((el) => {
//     el.forEach((el) => {
//         return sum+=el;
//     })
// })
// console.log(sum);

// let sum = 0;
// for (const array2 of arr) {
//     for (const el of array2) {
//         sum = sum + el;
//     }
// }
// console.log(sum)

// const arr2 = [
//     [
//         [1, "A"],
//         [2, "B"],
//         [3, "C"],
//     ],
//     [
//         [4, "D"],
//         [5, "E"],
//         [6, "F"],
//     ],
//     [
//         [7, "C"],
//         [8, "T"],
//         [9, "A"],
//     ],
//     [
//         [10, "P"],
//         [11, "L"],
//         [12, "M"],
//     ],
// ];

// console.log(arr2.flat(3), "flat");
//

// const arr4 = [1,2,3,4,5,6,7,8,9];
// arr4.reverse();
// console.log(arr4 ,"revers");

// const arr11 = ["Alex","Igor","Oleg","Vika"];
// const obj = {name: "Oleg", age:20};

// const{name ,age} = obj;
// console.log(name,age);

// const[name1,name2,name3,name4] = arr11;
// console.log(name1,name2,name3,name4,"names");

// const arr = [["1", "5", "7"], ["6", "9", "3"]];

// let res = [];
// arr.forEach((el) => {
//     el.forEach((elem) => {
//         res.push(+elem);
//     })
// });
// console.log(res);

// const res = arr.map((arrElement) => {
//     return arrElement.map((element) => +element);
// });
// console.log(res, "RES");


// const arr1212 = [1, 6, 9, "Text", [], [], {}, () => { }];
// console.log(arr1212.some((el) => Array.isArray(el)));

// const arr8 = [1, 6, 9, "Text", [1, 9], [], {}, () => {}];
// console.log(arr8.some(el => Array.isArray(el) && el.length === 0))

