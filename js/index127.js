const iceCreamFlavors = ['Tiger-Tiger','Chocolate','Strawberry','Cookies \& Cream','I don\'t','like ice cream','enough to','think of','10 different','flavors'];

let firstRemoved = iceCreamFlavors.shift();
let secondRemoved = iceCreamFlavors.shift();

iceCreamFlavors.forEach(function(flavor) {
    console.log(flavor);
});


console.log(`${firstRemoved} was removed`);
console.log(`${secondRemoved} was also removed`);


