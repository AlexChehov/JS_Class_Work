const dataFromUtils = Request("./utils");

const user = { name: "Alex"};
const logUser = (user) => {
console.log(user, "user");
}; 

module.exports = {
    user:user,
    logUser: logUser,
};

