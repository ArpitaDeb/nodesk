const mutants = ['Prof X','Cyclops','Iceman','Angel','Beast','Phoenix','Logan'];

if (mutants.indexOf('Logan') > -1 || mutants.indexOf('Prof X') > -1) {
    console.log(`We love X-Men!`);
}

if (mutants.indexOf('Gambit') < 0) {
    console.log(`X-Men sucks!`);
}