const oneLinerJoke = require('one-liner-joke');
let getRandomJoke = oneLinerJoke.getRandomJoke();
let getStupidJoke = oneLinerJoke.getRandomJokeWithTag('stupid');

console.log(`Random Joke:\n${getRandomJoke.body}`);
console.log(`Joke (with tags \'${getStupidJoke.tags}\'):\n${getStupidJoke.body}`);