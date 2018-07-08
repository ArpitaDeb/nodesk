const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

let mutantsFiltered = mutants.filter(function(name) {
    return name != 'Magneto' && name != 'Iceman' && name != 'Gambit';
});

console.log(mutantsFiltered);