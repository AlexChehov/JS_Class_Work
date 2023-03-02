// window.onload = () => {
//     alert("Hello I am loaded");
// };

// window.onblur = () => {
//   document.title = "Come back please";  
// };

// window.onclose = () => {
//     alert("Hey");
// };

// window.onfocus = () => {
//     document.title = "Document2";
// };

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const createButton = document.querySelector("#create");
const userSection = document.querySelector("#users-section");

const users = [];

const renderUsers = () => {
    userSection.innerHTML = "";
    const UsersContent = users.map((user) => `<div>
    <p>${user.name}</p>
    <span>${user.age}</span>
    </div>`);
    console.log(UsersContent);


    UsersContent.forEach((userLayout) => {
        userSection.innerHTML += userLayout;
    });
}

createButton.onclick = () => {
    const name = nameInput.value;
    const age = +ageInput.value;

    const user = { name: name, age: age };

    users.push(user);

    nameInput.value = "";
    ageInput.value = "";

    renderUsers();
}
