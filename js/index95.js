/***********************************
let f = 0;
let f1 = -1
let f2 = 1;

do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
} while (f<1000)
********************************************/
let f1 = -1
let f2 = 1

for(let f=0; f<1000; f=f1+f2) {
    f1 = f2;
    f2 = f;
    console.log(f);
}