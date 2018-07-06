/***********************************
let f = 1;
let f1 = 0;
let f2 = 1;

console.log("\nStarting at 1:");
while (f<1000) {
    console.log(f);
    f = f1 + f2;
    f1 = f2;
    f2 = f;
}

f = 0;
f1 = -1;
f2 = 1;

console.log("\nStarting at 0:");
while (f<1000) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}
********************************************/

let f = 0;
let f1 = -1
let f2 = 1;

do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
} while (f<1000)