const numbers = [];

for (i=0; i<1001; i++) {
    numbers.push(i);
}

let newNumbers = numbers.map(function(num){
    return num+10;
});

numbers.forEach(function(oldNum,index) {
    console.log(`Index: ${index}, Original Number: ${oldNum}, Incremented Value: ${newNumbers[index]}`);
});