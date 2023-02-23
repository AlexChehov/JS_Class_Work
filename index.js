// //new
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         return this;
//     }
//     showInfo() {
//         console.log(`Hi, my name is ${this.name} I am ${this.age}`);
//     }
//     getName () {
//         return this.name;
//     }
//     setName (NewName) {
//         return this.name = NewName;
//     }
// }

// const Person1 = new Person("Igor", 23)

// Person1.showInfo();
// Person1.setName("Alex");
// console.log(Person1.getName());
// Person1.showInfo();
// Person1.getName();


// console.log(Person1);





// //old
// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;

//     this.showInfo = function () {
//         console.log(`Hi, my name is ${this.name} I am ${this.age} old`);
//     }

//     return this.name;

// }


// const person2 = new PersonFn("Oleg", 50);
// console.log(person2);

// class Cars {
//     constructor(name, age, color, mile) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.mile = mile;

//         return this;
//     }
//     showInfo() {
//         console.log(`Hi, I am have a  ${this.name} she ${this.age} old ,
//         she ${this.color} and has ${this.mile} miles`);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(NewName) {
//         return this.name = NewName;
//     }
// }
// const Cars1 = new Cars("BMW", 1994, "Black", 350000);
// Cars1.showInfo();

// console.log(Cars1.getName());

// Cars1.setName("Ford");
// console.log(Cars1.getName());
// Cars1.showInfo();

// class Ford {

//     static isFord (car) {
//         return car instanceof Ford 
//     }

//     constructor(price, color, model, speed) {
//         this.price = price;
//         this.color = color;
//         this.model = model;
//         this.speed = speed;

//         return this;
//     }
//     info() {
//         console.table(this);
//     }
//     ride() {
//         console.log(`I am riding with speed ${this.speed} km/uhr`)
//     }
// }

// class Mustang extends Ford {
//     constructor(price, color, model, speed, turbo) {
//         super(price, color, model, speed);

//         this.turbo = turbo;

//         return this;
//     }

//     speedyRide() {
//         console.log(`I am riding speedyRide ${this.speed} km/uhr`)
//     }
// }

// class MustangGT extends Mustang {
//     constructor(price, color, model, speed, turbo, isGt) {
//         super(price, color, model, speed, turbo)
//         this.isGt = isGt;

//         return this;
//     }
//     nitro() {
//         this.speed = this.speed + 50;
//         console.log(`I am using nitro with speed ${this.speed}`)
//     }
//     info () {
//         console.table(this,"This is MUSTANG GT");
//     }
// }


// const mondeo = new Ford(10000, "black", "Mondeo", 200);
// mondeo.info();
// mondeo.ride();

// const mustang = new Mustang(50000, "Blue", "Mustang", 300, true);
// mustang.info();
// mustang.speedyRide();

// console.log(mondeo instanceof Ford);


// const mustangGT = new MustangGT(70000, "red", "mustangGT", 400, true, true);
// mustangGT.speedyRide();
// mustangGT.nitro();
// mustangGT.info();
// mustangGT.ride();

// console.log(Ford.isFord(mondeo),"isFord");
// console.log(Ford.isFord({}),"isFord");
// console.log(Array.isArray([]));

// class Cars {
//     constructor(name, age, color, mile) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.mile = mile;

//         return this;
//     }
//     showInfo() {
//         console.log(`Hi, I am have a  ${this.name} she ${this.age} old ,
//         she ${this.color} and has ${this.mile} miles`);
//     }
//     getName() {
//         return this.name;
//     }
//     setName(NewName) {
//         return this.name = NewName;
//     }
// }

// class Cars11 extends Cars {
//     constructor(name,age,coor,mile) {
//         super(name,age,coor,mile,wills)
//         this.wills = wills;

//         return this;
//     }

//     speedyRide() {
//         console.log(`I am riding speedyRide ${this.speed} km/uhr`)
//     }
//     setName(NewName) {
//         return this.name = NewName;
//     }

// }


// const Cars1 = new Cars("BMW", 1994, "Black", 350000);
// Cars1.showInfo();
// Cars1.setName("Ford");
// console.log(Cars1.getName());
// Cars1.showInfo();



// console.log(Cars1.getName());

// Cars1.setName("Ford");
// console.log(Cars1.getName());
// Cars1.showInfo();


class Person {

    #age;

    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    get name() {
        return this.name;
    }
    set name(NewName) {
        return this.name = NewName;
    }
}
const person = new Person("Alex", 28)
console.log(person);
console.log(person.name, "person");