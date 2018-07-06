let tripExpenses = [200,100,250];
let budget = tripExpenses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(`Hotel: ${tripExpenses[0]}\nTrip: ${tripExpenses[1]}\nMeals: ${tripExpenses[2]}`);
console.log(`Total trip budget: ${budget}`);