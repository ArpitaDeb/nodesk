function add() {
    let sum = 0;
    for (i=0;i<arguments.length;i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(`With 5 numbers: ${add(5,3,2,7,9)}`);
console.log(`With 10 numbers: ${add(4,7,3,6,10,4,88,45,22,98)}`);