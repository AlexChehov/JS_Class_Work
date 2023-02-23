// class Person {

//     #age = Date.now();

//     constructor(name) {
//         this.name = name;
//     }

//     getDate(date) {
//         return date - this.#age;
//     }

//     get age() {
//         return this.#age;
//     }

//     set age(newAge) {
//         this.#age = newAge;
//     }

// }

// const person = new Person("Igor", 23);

// //
// person.age = 100; //setter
// person.age //getter

// person.name = "Oleg";

// console.log(person, "person");

// console.log(Person.prototype,"prototipe");

// Person.prototype.showinfo = function () {
//     console.log(this);
// }
// person.showinfo();


// class Cars {
//     #color
//     constructor(model, price) {
//         this.model = model;
//         this.price = price;

//     }
//     get color () {
//         return this.#color
//     }
//     set color (newColor) {
//         return this.#color = newColor
//     }
// };

// const cars = new Cars("Dodge", 15000)
// cars.color = "Red"
// console.log(cars)


// class Rar {
//     #sector
//     constructor(sector) {
//         this.sector = sector;

//     }
//     get sector() {
//         return this.#sector;
//     }

//     set sector(newSector) {
//         this.#sector = newSector;
//     }
// }
// const rar = new Rar("Selector", 23000);
// rar.sector = "SectoR";
// console.log(rar);

// Rar.prototype.showinfo = function () {
//     console.log(this);
// }
// rar.showinfo();



// 2. Створити аналог класу Object з доданим методом copy. 
// Метод має повертати нову незалежну копію вашого object


class SuperObject extends Object {
    constructor (arr) {
        super(arr);
    }
    copyInfo () {
        return{...this}
    }
}

console.log(arr);