let average = 6;
let studentAverage = 3;
let studentPass = false;
if (studentAverage >= average) {
    studentPass = true;
}
console.log(`This student has a greater or equal average required to pass: ${studentPass}`);
if (studentPass == false) {
    console.log(`this student is missing ${average-studentAverage} points to pass.`)
}