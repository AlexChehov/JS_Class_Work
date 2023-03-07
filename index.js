const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const userSection = document.querySelector("#users-section");
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("#search_button");

let users = [
    { nmae: "Igor", city: "Kiev", age: 23 },
    { nmae: "Alex", city: "Kiev", age: 24 },
    { nmae: "Oleg", city: "Kiev", age: 25 },
];

const deleteUser = (indexofusers) => {
    users = users.filter((el, i) => i !== indexofusers);
    renderUsers(users);
};

function renderUsers (usersToRender) {
    userSection.innerHTML = "";
    const UsersContent = users.map((user) => `<div class="usersCard">
    <p>${user.name}</p>
    <span>${user.age}</span>
    <span>${user.city}</span>
    <button class="delete-user-button">Delete</button>
    </div>`);
    console.log(UsersContent);


    UsersContent.forEach((userLayout) => {
        userSection.innerHTML += userLayout;
    });
    const deleteButtons = [...document.querySelectorAll(".delete-user-button")];

    deleteButtons.forEach((button, index) => {
        button.onclick = () => deleteUser(index);
    });
};




createButton.onclick = () => {
    const name = nameInput.value;
    const age = +ageInput.value;
    const city = cityInput.value;

    const user = { name: name, age: age, city: city };

    users.push(user);

    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";

    renderUsers(users);
};

searchButton.onclick = () => {
    const usersToRender = users.filter((user) => user.name.includes(searchInput.value));
    // console.log(usersToRender);
    renderUsers(usersToRender);
};