function even(evenNum) {
    return evenNum % 2 == 0;
}

function result(resNum) {
    if (even(resNum) == true) {
        console.log(`${resNum} is even`);
    } else {
        console.log(`${resNum} is odd`);
    }
}

let globalNum = 2;
result(globalNum);

globalNum = 5;
result(globalNum);

globalNum = 3;
result(globalNum);

globalNum = 24;
result(globalNum);

globalNum = 12;
result(globalNum);