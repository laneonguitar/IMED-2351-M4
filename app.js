const myAge = 55;
const myName = "Lane";

const momsAge = 87;
const momsName = "Jacqueline";

const dogsAge = 7; // Dog's age in human years
const dogName = "Sophie";

const dogAgeDogYears = dogsAge * 7;  // Dog's age in dog years average


console.log(myName);
console.log(momsName);
console.log(myAge + dogsAge + momsAge); // 149 years total
console.log(dogsAge); // 7 total actual age
console.log(myAge + momsAge - dogsAge);  // 135
console.log(myAge - momsAge + dogAgeDogYears); // 17 years total

console.log(dogAgeDogYears); // dog's actual age multiplied by 7 which is 49 in dog years.

console.log(`My dog's age is ${dogsAge} in human years, however she is ${dogAgeDogYears} years old in dog years. Her name is ${dogName}.`);

console.log(`My name is ${myName} and my age is ${myAge} in human years, and my mother's name is ${momsName}. Her age is ${momsAge} in human years as well.`); 


