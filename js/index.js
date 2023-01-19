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




const input = document.getElementById("input");
const calculateButton = document.getElementById("calculate");

const calculationButtons = Array.from(document.getElementsByClassName("calculations"));

calculationButtons.forEach((el) => {
  el.onclick = function () {
    input.value = input.value + el.textContent;
  };
});

const numberButtons = Array.from(document.getElementsByClassName("number"));

numberButtons.forEach((el) => {
    el.onclick = function () {
      input.value = input.value + (+el.textContent);
    };
  });

calculateButton.onclick = function () {
    input.value = eval(input.value);
}