// логічні оператори

// || &&

// const userName = prompt("Enter Name");

// const gender = !userName && "Not recognized";

// alert(gender);

// const userName = prompt("Enter Name");

// const gender = userName === "Igor" || userName === "Oleg" ? "MEN" :
//     userName === "Olena" || userName === "Nastya" ? "Women" : "Not recognized";

// alert(gender);

// const userName = prompt ("Enter Name");

// const resultName = userName || "Default name user";

// alert(resultName);

// ==
// ===

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(null == 0);
// console.log(null === 0);
// console.log(null !== 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);
// console.log(typeof null, typeof 0, typeof undefined );

// const number = +prompt ("Enter Namber") || 0;
// const number = +prompt ("Enter Namber") || new Error ("write number");

// const n1 = prompt ("Enter Name");
// const n2 = prompt("Enter Name");

// let res = (n1 && n2 ? n2 : "Not resault") ; 




// const input = document.getElementById("input");
// const calculateButton = document.getElementById("calculate");

// const calculationButtons = Array.from(document.getElementsByClassName("calculations"));

// calculationButtons.forEach((el) => {
//   el.onclick = function () {
//     input.value = input.value + el.textContent;
//   };
// });

// const numberButtons = Array.from(document.getElementsByClassName("number"));

// numberButtons.forEach((el) => {
//     el.onclick = function () {
//       input.value = input.value + (+el.textContent);
//     };
//   });

// calculateButton.onclick = function () {
//     input.value = eval(input.value);
// }




// Object in JavaScript 19-01-2023



// const obj = {};
// const obj2 = new Object({});


// const user = {
//     name: "Igor",
//     age: 23,
//     // key: value
//     obj: {
//         key: "value"
//     },

// };

// console.log(user.name);
// console.log(user["age"]);
// console.log(user.obj.key);


// console.log(Object.keys(user).length);
// console.log(Object.values(user));
// console.log(Object.length);

// user.newProp = "NEW";
// user.obj.secondkey = 2;
// console.log(user);

// user.newProp = "NEW";
// user.obj.secondKey = 2;

// for (let i = 0; i <= 3; i++ ) {
//     const keys = Object.keys(user);
//     const values = Object.values(user);

//     console.log(`${keys[i]} : ${values[i]} `);
// }


// console.log('before', user);

// for (let key in user) {

//     // console.log(key);

//     // console.log(user[key]);
//     delete user[key];

// }
// console.log('after', user);


// const obj = {};
// const obj2 = new Object({});

// const user = {
//     name: "Olexiy",
//     age: 29,  
//     obj: {
//         key: "value"
//     },
// };

// console.log('before', user);
// for (let key in user) {
//     delete user[key];
// }
// console.log('after', user);


// const name = 'Alex';
// const age = 30;
// const city = "Kyiv";

// const data = {
//     name: 'Alex',
//     age: 30,
//     city: "Kyiv"
// };
// console.log(data);


// const data = {};
// data.name = 'Igor';
// data.age = 23;
// data.city = 'Kyiv';
// console.log(data)


// const name = 'Alex';
// const age = 30;
// const city = "Kyiv";

// const data = {
//     name,
//     age,
//     city
// }
// console.log(data);


// const str = "ABCDEFG";
// const alphObj = {};

// for(let i = 0; i <= str.length; i++){alphObj[i] = str[i];}
// console.log(alphObj)

// for (let i = 0; i < str.length; i++) {
//     alphObj[str[i]] = str[i];
// }

// console.log(alphObj);


// const data1 = {
//     name: "Olexiy",
//     age: 30,
//     city: "Kiyv"
// }

// const data2 = { ...data1 };

// for (let key in data1) {
//     data2[key] = data1[key];
// }
// data1.name = "Oleg";

// console.log(data1);

// console.log(data2);


// let pr1 = 100;
// let pr2 = pr1;
// pr1 = 50;
// console.log(pr2);



let data1 = {
    name: "Olexiy"
};

let data2 = {

};

data2[data1.name] =  Object.keys(data1)[0];

console.log(data2);
console.log(data1);


