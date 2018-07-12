let sum = 0;
let num1 = 1;
let fibArr = [];

function fib() {
    if (sum < 20) {
        sum = sum + num1;
        fibArr.push(sum);
        fib();
    }
}
fib();
console.log(fibArr);