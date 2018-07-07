const mutants = ['Prof X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

for (let i=0; i<mutants.length;i++) {
    console.log(mutants[i]);
    if (mutants[i] == 'Magneto') {
        break;
    }
}

let preMagneto = mutants.slice(0,mutants.indexOf('Magneto'));
console.log(preMagneto);

let postMagneto = mutants.slice(mutants.indexOf('Magneto')+1,mutants.length);
console.log(postMagneto);

let noMagneto = preMagneto.concat(postMagneto);
console.log(noMagneto);

