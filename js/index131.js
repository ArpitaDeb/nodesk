const femaleStudents = ['Jane','Janice','Janet','Joyce','Jocelyn'];
const maleStudents = ['John','James','Jim','Jack','Jake'];
const students = femaleStudents.concat(maleStudents);

students.sort();

console.log(`\nFemale Students:`);
femaleStudents.forEach(function(name, index) {
    console.log(`${index}. ${name}`);
})

console.log(`\nMale Students:`);
i = 0;

while (i<maleStudents.length) {
    console.log(`${i}. ${maleStudents[i]}`);
    i++;
}

console.log(`\nAll Students:`);

for (i=0;i<students.length;i++) {
    console.log(`${i}. ${students[i]}`);
}