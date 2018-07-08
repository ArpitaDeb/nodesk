const iceCreamFlavors = ['Tiger-Tiger','Chocolate','Strawberry','Cookies \& Cream','I don\'t','like ice cream','enough to','think of','10 different','flavors'];

let firstRemoved = iceCreamFlavors.pop();
let secondRemoved = iceCreamFlavors.pop();
let thirdRemoved = iceCreamFlavors.pop();
let fourthRemoved = iceCreamFlavors.pop();

iceCreamFlavors.forEach(function(flavor) {
    console.log(flavor);
});


console.log(`${firstRemoved} was removed`);
console.log(`${secondRemoved} was also removed`);
console.log(`${thirdRemoved} was the third to be removed`);
console.log(`${fourthRemoved} was the last to be removed`);

