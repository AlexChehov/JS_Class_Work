
const arr1 = [{ name: "Igor", age: 20 }, { name: "Oleg", age: 40 }];

const result = arr1.map((obj) => {
    const resultElement = [];
    for (let key in obj) {
        resultElement.push(key);
        resultElement.push(obj[key]);
    }
    return resultElement;
}).flat();

// console.log(result, "RESULT");

const result1 = arr1.reduce((acc, el, i, result) => {
    result[i + 1] && acc.push([el, result[i + 1]]);
    return acc;
}, []);
console.log(result1.filter((e, i) => !(i % 2)), "RESULT2");
