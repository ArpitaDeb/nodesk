const students = ['a','b','c','d','e','f','g','h','i'];

console.log(`The students array has ${students.length} items.`);
for (i=0;i<students.length;i++) {
    if (i == 1 || i == 5) {
        console.log(students[i].toUpperCase());
    } else {
        console.log(students[i]); 
    }
}