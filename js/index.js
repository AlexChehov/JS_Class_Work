// const arr1 = [300, 100, 500, NaN, 800, NaN];
// const res1 = [];
// for (let el of arr1) {
//     if (!isNaN(el)) {
//         res1.push(el);
//     }
// }
// console.log(NaN === NaN,"nans");

// console.log(arr1, "arr1");
// console.log(res1, "res1");

// console.log(Infinity);

// console.log(
//     arr1.filter((el) => !isNaN(el)), "!!!"
// );




// Task1
// const arr = ["A", "B", "c", "D", "Y", "o"];
// let res = arr.filter((el)=> (el.toLowerCase()!== el));

// console.log(res);

// const arr = ["A", "B", "c", "D", "Y", "o"];
// let res;
// res = arr.filter((s) => s !== s.toLowerCase());
// console.log(res);


// const arr = [1,80,1,4,5,7,5];
// let res2 = arr.filter((el, index) => {
//     return arr.indexOf(el) === index;
// });
// console.log(res2)

// const arr3 = [10, 60, 80, 40, 80, 70]; // i % 2
// let res3 = 0;
// arr3.forEach((el, i) => {
//     if(i % 2){
//         res3 += el;
//     }
// });
// console.log(res3);

// const str = "Hello world";
// console.log(str.split(" "),"split");
// const arr5 =["Hello","world"];
// console.log(arr5.join(" ! "),"join")

// const arr6 = ["Hello","world","how","are","you"];
// console.log(arr6.join(","));

// const users = [
//     { name: "Igor", password: "password", location: "Kyiv" },
//     { name: "Oleg", password: "password", location: "Kyiv" },
//     { name: "Alex", password: "password", location: "Kyiv" },
//     { name: "Maryna", password: "password", location: "Kyiv" },
// ];

//   const cleanUsers = users.map((user) => {
//     delete user.password;
//     return user;
//   });

// const usersUP = users.map((user) => {
//     el.location = "Lviv";
//     return usersUP;
// });


// const users = [
//     { name: "Igor", password: "password", location: "Kyiv" },
//     { name: "Oleg", password: "password", location: "Kyiv" },
//     { name: "Alex", password: "password", location: "Kyiv" },
//     { name: "Maryna", password: "password", location: "Kyiv" },
// ];
// const usersAge = users.map((el) => {
//     users.age = Math.floor(Math.random() * 100);
//     return el
// })
// console.log(usersAge)

// console.log(users);

