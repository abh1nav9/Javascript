const name = "Abhinav"; // Way 1 of defining string
const repoCount = 50;

console.log(name + repoCount + " Value"); // Outdated way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Modern way ( String Interpolation )

// Way 2 of defining string
const gameName = new String('Abhinav'); // This way of defining string actually creates a object of string
// Use Chrome Dev Console to see the difference between the two ways of defining string

console.log(gameName[0]); // Accessing the character of the string by index
console.log(gameName.__proto__ /*  [dot] . prototype type */  ); // Accessing the prototype of the string object ( Actual Syntax)

// Some String Prototype
console.log(gameName.length); // Returns the length of the string

console.log(gameName.toUpperCase()); // Convert the string to uppercase

console.log(gameName.charAt(2)); // Returns the character at the given index

console.log(gameName.indexOf('t')); // Returns the index of the first occurence of the given character

const newString = gameName.substring(0, 4) // Start index and end index
console.log(newString);

const anotherString = gameName.slice(-8, 4) // Negative index means from the end of the string
console.log(anotherString);

const newStringOne = "   Abhinav    "
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove the white spaces from the string

const url = "https://abhinav.com/abhinav%20gautam";
console.log(url.replace('%20', '-')); // Replace the given character with the given character
console.log(url.includes('sundar')); // Check if the given string is present in the string

console.log(gameName.split('-')); // Split the string by the given character and return an array