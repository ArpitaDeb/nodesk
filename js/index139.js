const numbers = [];

for (i=1000;i>0;i=i-1) {
    numbers.push(i);
}

let evens = numbers.filter(function(num) {
    return num%2 == 0;
})

let odds = numbers.filter(function(num) {
    return num%2 != 0;
})

console.log(`\nOdds:`);
for (i=1;i<11;i++) {
    console.log(odds.pop());
}

console.log(`\nEvens:`);
for (i=1;i<11;i++) {
    console.log(evens.pop());
}
