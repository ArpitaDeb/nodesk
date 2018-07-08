const mutants = ['Prof X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
let selectedMutants = []

mutants.forEach(function(name) {
    if (name == 'Iceman' || name == 'Logan' || name == 'Phoenix')
        selectedMutants.push(name);
});

console.log(selectedMutants.toString());