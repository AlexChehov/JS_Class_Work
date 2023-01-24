

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



// let data1 = {
//     name: "Olexiy"
// };

// let data2 = {

// };

// data2[data1.name] =  Object.keys(data1)[0];

// console.log(data2);
// console.log(data1);


// const person = {
//     name12:"Alex",
//     age:10,
//     email:"emaill@gmail.com"
// };
// const { name12 ,age ,email } = person;
// console.log(name12,age,email);
// Object.freeze(person);
// delete person.age;
// person.city = "Kiyv";
// console.log(person, person.city);
// console.log(Object.isFrozen(person));


// const person1 = {
//     personName: "Alex",
//     age:20,
//     SecName:"Filipov"
// }
// const person2 = {
//     personName: "Oleg",
//     age:22,
//     SecName:"Frolov"
// }
// Object.freeze(person1);
// delete person1.age;
// person1.age = 30;
// console.log(person1 , person2);

// const object = {
//     person1: {
//       name: "Igor",
//       age: 20
//     },
//     person2: {
//       name: "Oleg",
//       age: 50
//     },
//     person3: {
//       name: "Alex",
//       age: 40
//     },
//   };

//   for (let key in object){
//     console.log(object[key],'!');
//     if(Object[key].age < 50){
//         object.freeze(object[key]);
//     } else {
//         delete Object[key];
//     }
//   };
// console.log(Object, 'final object');
  
// for (let el in object) {
//     if (el['age'] < 50) Object.freeze(el);
//     else delete el;
//   }
//   console.log(object);

