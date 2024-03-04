//  Primitive Data Types
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


// Number
const score = 100;
const scoreValue = 100.3;

// String

const FirstName = "Abhinav";
const LastName = 'Gautam';
const FullName = FirstName + " " + LastName;
console.log(FullName);

// Boolean
const isLoggedIn = false || true;

// Null
const outsideTemp = null

// Undefined
let userEmail;

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // False

// BigInt
const bigNumber = 3456543576654356754n

// ---------------------------------------------


// Non primitive / Reference Data Types
// Array, Objects, Functions


// Array
const heros = ["Shaktiman", "Naagraj", "Doga"];
const numbers = [1, 2, 3, 4, 5];

// Object
let myObj = {
    name: "Abhinav",
    age: 21,
}

// Function
const myFunction = function(){
    console.log("Hello World");
}


/*

- Premitive Datatypes

              Type                                   typeof

i)            Number                               number
ii)           String                               string
iii)          Boolean                              boolean
iv)           Bigint                               bigint
v)            Symbol                               symbol
vi)           Null                                 object
vii)          Undefined                            undefined


- Non-Premitive OR Referance OR Object datatype

                 Type                               typeof

i)               Object                              object
ii)              Array                               object
iii)             Function                            function(object)

*/


// Documentation Resource
// https://262.ecma-international.org/5.1/#sec-11.4.3