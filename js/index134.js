const numbers = [];
let sum = 0;
for (let i=1; i<=1000; i++) {
    numbers.push(i);
    sum = sum+i;
    console.log(sum);
}

if(sum==500500) {
    console.log(`Good job!!!`)
} else {
    console.log(`Take a look to see if something is wrong...`)
}