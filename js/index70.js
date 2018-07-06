let sum = 0;
let i = 0
while(i<=1000) {
    if (i%2 != 0) {
        console.log(`${sum} + ${i} = ${sum + i}`)
        sum = sum+i;
        i++;
    } else {
        i++;
    }
}