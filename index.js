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

let users = [];

const deleteUser = (indexofusers) => {
    users =users.filter((el,i) => i !== indexofusers);
    renderUsers();
 };

const renderUsers = () => {
    userSection.innerHTML = "";
    const UsersContent = users.map((user) => `<div class="usersCard">
    <p>${user.name}</p>
    <span>${user.age}</span>
    <button class="delete-user-button">Delete</button>
    </div>`);
    console.log(UsersContent);


    UsersContent.forEach((userLayout) => {
        userSection.innerHTML += userLayout;
    });
    const deleteButtons = [...document.querySelectorAll(".delete-user-button")];

    deleteButtons.forEach((button,index) => {
        button.onclick = () => deleteUser(index);
    });
};

// const deleteUser = () => {
//     deleteButtons.forEach((button) => {
//         button.onclick = () => deleteUser();
//     });
// };

createButton.onclick = () => {
    const name = nameInput.value;
    const age = +ageInput.value;

    const user = { name: name, age: age };

    users.push(user);

    nameInput.value = "";
    ageInput.value = "";

    renderUsers();
};
