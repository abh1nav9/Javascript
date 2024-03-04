let score = "Abhinav";

console.log(typeof score);
console.log(typeof(score));

// valueToNumber
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN - Not a Number
// true => 1; false => 0


// valueToBoolean
let isLoggedIn = "Abhinav";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Abhinav" => true


// valueToString
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



// *********************** Operations ***********************


// Basic and Ovbious Things
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


// Addition or Concatenation
let str1 = "Hello"
let str2 = " Abhinav"

let str3 = str1 + str2
console.log(str3);


// Self Study About These
console.log("1" + 2); // "12"
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); 
console.log( (3 + 4) * 5 % 3);
console.log(+true);
console.log(+"");

// Poor Readability
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// Prefix and Postfix
let a = 100
++a;
console.log(a);

let b = 100
b++;
console.log(b);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript