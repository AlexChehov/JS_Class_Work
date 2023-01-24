// const database = {};

// const data = {
//     game1: {
//         isFinished: true,
//         score: 100,
//     },
//     game2: {
//         isFinished: false,
//         score: 500,
//     },
//     game3: {
//         isFinished: false,
//         score: 10,
//     },
//     game4: {
//         isFinished: true,
//         score: 10,
//     },
//     game5: {
//         isFinished: true,
//         score: 200,
//     },
// };


// for (let key in data) {
//     if (data[key].isFinished && data[key].score >= 100) {
//         database[key] = data[key];
//     }
// }
// console.log(database);

// for (let key in data) {
//     if (data[key].score >= 100 && data[key].isFinished == 'true') {
//         database.key = data.key
//     } else delete data[key]
// }
// console.log(database)

const obj = {
    name : "Igor"
};

const obj2 = {
    age : 15
};

const obj3 = {
    age:100,
    city: "Kyiv"
};

const my_obj = {
    ...obj,
    ...obj3,
    ...obj2
}
 
console.log(my_obj)