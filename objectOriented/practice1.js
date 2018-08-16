function Person(firstName, lastName, age, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.interests = interests;
}

let johnDoe = new Person('John','Doe', 42, ['vidya games','boaahhrd games','pahhrrty games','miiind games']);

console.log(`Name: ${johnDoe.firstName} ${johnDoe.lastName}\nAge: ${johnDoe.age}\nInterests: ${johnDoe.interests[0]}, ${johnDoe.interests[1]}, ${johnDoe.interests[2]}, ${johnDoe.interests[3]}`);