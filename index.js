class Person {
 
    #age = Date.now();
 
    constructor(name) {
        this.name = name;
    }
 
    getDate (date) {
        return date - this.#age;
    }
 
    get age () {
        return this.#age;
    }
 
    set age (newAge) {
        this.#age = newAge;
    }
 
}
 
const person = new Person("Igor", 23);
 
//
person.age = 100; //setter
person.age //getter
 
person.name = "Oleg";
 
console.log(person, "person");


