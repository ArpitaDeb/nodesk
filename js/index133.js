const mutants = ['Prof X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

console.log(`\nFirst Part: `);
for (let i=0; i<mutants.length;i++) {
    console.log(mutants[i]);
    if (mutants[i] == 'Magneto') {
        break;
    }
}

console.log(`\nSecond Part: `);
let preMagneto = mutants.slice(0,mutants.indexOf('Magneto'));
let postMagneto = mutants.slice(mutants.indexOf('Magneto')+1,mutants.length);
let noMagneto = preMagneto.concat(postMagneto);

for (let i=0; i<noMagneto.length;i++) {
    console.log(`${i}. ${noMagneto[i].toUpperCase()}`);
}

