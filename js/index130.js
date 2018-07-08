const mutants = ['Prof X','Cyclops','Iceman','Angel','Beast','Phoenix'];
const sortedMutants = mutants.slice(0).sort();
const reversedSortedMutants = sortedMutants.slice(0).reverse();
const joinedMutants = mutants.join(' * ');

console.log(`Mutants: ${mutants}`);
console.log(`Sorted Mutants: ${sortedMutants}`);
console.log(`Reversed \& Sorted Mutants: ${reversedSortedMutants}`);
console.log(`Joined Mutants: ${joinedMutants}`);
