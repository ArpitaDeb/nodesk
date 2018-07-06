/* "Person" arrays: [FirstName,LastName,Address,Age] */

let firstPersonArr = ["John","Doe","33 Fake St.","42"];
let secondPersonArr = ["John","Doe","33 Fake St.","42"];

const firstPersonStr = firstPersonArr.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue;
});

const secondPersonStr = secondPersonArr.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue;
});

if (firstPersonStr == secondPersonStr) {
    console.log("First and Second Person match!");
} else {
    console.log("First and Second Person do NOT match!");
}

