const superhero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin','Alfred','Gordon'],
    strength: 70
}

console.log(`Name: ${superhero.name}`);
console.log(`Secret Name: ${superhero.secretName}`);
console.log(`Sidekicks: ${superhero.sidekick.toString()}`);
console.log(`Strength: ${superhero.strength}`);

console.log(`Speed: ${superhero.speed}`);
superhero.speed = 80;
console.log(`Speed: ${superhero.speed}`);