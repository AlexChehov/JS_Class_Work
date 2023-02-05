// const arr = [];
// arr.length = 20;
// arr.fill("Hello");
// console.log(arr,"console");

// const arr = new ArrayBuffer(10).fill(1);

// const arr = [
//     {
//         name: "Igor",
//         age: 23,
//         role: "admin",
//     },
//     {
//         name: "Oleg",
//         age: 23,
//         role: "user",
//     },
//     {
//         name: "Yula",
//         age: 23,
//         role: "user",
//     },
// ];
// console.log(arr, "arr");

// const isAllElementsEqualToOne = arr.every((object) =>
//     ["admin", "user"].includes(object.role)
// );

// console.log(isAllElementsEqualToOne, "every");


// const arr = [1, 5, 10, 20];
// const res = arr.every((n) => n > 30);
// console.log(res);

// const arr = [5, 10, 15, 20];
// const isAllElements = arr.every ((number) => number +5);
// console.log(isAllElements);
// const frameWorksWithoutSpace = words.reduce((acc, framework) => {
//     acc.push(framework.trim());
//     return acc;
// }, []);

const words = ["React ", "Angular ", "Vue ", "Svelte "];
const firstLetters = words.reduce((acc, el, i, arr) => {
    acc.push(el.charAt(0))
    return acc;
},[])
console.log(firstLetters)