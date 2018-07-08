/*
let count = 1;
let msg = "";
while (count < 14) {
    msg = '*'.repeat(count);
    console.log(msg);
    count+=2;
}
*/
/*
let count = 1;
let msg = ""
do {
    msg = '*'.repeat(count);
    console.log(msg);
    count+=2;
} while (count < 14)
*/

for (i=1;i<=14;i+=2) {
    msg = '*'.repeat(i);
    console.log(msg);
}