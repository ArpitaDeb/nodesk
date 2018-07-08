const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit']

let mutantsWithHearts = mutants.map(function(name) {
    if (name == 'Professor X' || name == 'Logan' || name == 'Phoenix' || name == 'Gambit') {
        return '<3 ' + name;
    } else {
        return name;
    }
});

console.log(mutants);
console.log(mutantsWithHearts);