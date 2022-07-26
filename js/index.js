// Let's declare some variables and give them some values. Then print each one

let hacker1 = `Benjamin`;
console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Cilly Joe`;
console.log(`The navigator is ${hacker2}`);

// I know i'm gonna need to use the length of both variable. Let's declare 2 more variables

let driverNameLength = hacker1.length;
let navigatorNameLength = hacker2.length;

// Let's compare both variable with an if...else statement

if (driverNameLength > navigatorNameLength) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (navigatorNameLength > driverNameLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (driverNameLength === navigatorNameLength) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// let's declare a variable. It will be spaced uppercase letters. Next I'm going with a for loop because 
// i need to go through every letter of my driver's name. I'm adding +=  every letter 
// that i'm uppercasing with .touppercase into my empty variable and add space with an empty string

let spacedUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedUpperCase += hacker1[i].toUpperCase() + " ";
}

console.log(spacedUpperCase);

// We can make exactly the same process if we want reversed letters. 
// But instead of doing my loop from zero to the length of my string. 
// We do it 'reverse' : From the the length of my string to Zero
let reversedUpperCase = "";
for (let i = hacker2.length - 1; i > 0; i--) {
  reversedUpperCase += hacker2[i].toUpperCase();
}

console.log(reversedUpperCase);

// I don't find an other way yet... i know how to get the first letter of eaach but i don't know how to compare list regarding the lexicographic order. Maybe if i can transform a string into a number 
let smallFirstLetterDriver = hacker1[0].toLowerCase()
let smallFirstLetterNavigator = hacker2[0].toLowerCase()

if (smallFirstLetterDriver < smallFirstLetterNavigator){
  console.log(`The driver's name goes first.`);

} else if (smallFirstLetterDriver > smallFirstLetterNavigator){
  console.log(`Yo, the navigator goes first definitely`);

} else { console.log (`What ?! You both have the same name ?`)

}



/* if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What ?! You both have the same name ?`);
}

let testPhrase = "Do id commodo a enim aute cupidatat aliqua in consectetur enim ullamco. Veniam sunt consequat deserunt labore. Nostrud deserunt deserunt enim sit pariatur. Dolor deserunt nisi quis nisi adipisicing. "
let splitPhrase = testPhrase.split(' ');
const arrayOfStrings = testPhrase.split(' ').length

console.log(splitPhrase)
console.log(arrayOfStrings) */



