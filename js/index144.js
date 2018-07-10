const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
};

console.log(user.username);
console.log(user.password);
console.log(user.username.slice(0,1).toUpperCase() + user.username.slice(1));
console.log(user.password.slice(0,6) + " " + user.password.slice(10));