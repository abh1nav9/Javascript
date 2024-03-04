
// Functions

// Syntax
function xyz(/* Parameters */){
    // Code
}

xyz(/* Arguments */)

function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("V");
} // Function Declaration

sayMyName() // A B H I N A V

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
} // Here functon is not returning anything, it is just printing the result
console.log(addTwoNumbers(3, 5)) // 8

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    return number1 + number2 // This line will not execute, because return statement will terminate the function
} // Here functon is returning the result

addTwoNumbers(3, 5) // This will not print anything, because we just storing the addition result in function not printing it

const result = addTwoNumbers(3, 5) // Storing the result of function in variable
console.log("Result: ", result); // 8


function loginUserMessage(username = "sam" /* Default value of parameter */ ){
    if(!username /* Falsy value or Undefined value */){
        console.log("PLease enter a username");
        return 
    }
    return `${username} just logged in`
} 


loginUserMessage("Abhinav") // Abhinav just logged in
console.log(loginUserMessage("Abhinav")); // Abhinav just logged in


// Define a function that takes two numbers and a function as parameters
function operate(num1, num2, operation) {
    return operation(num1, num2);
}

// Define a couple of simple operation functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Call the operate function with different operations
console.log(operate(2, 3, add)); // Output: 5
console.log(operate(2, 3, multiply)); // Output: 6


// -----------------------------------------------------------------

function calculateCartPrice(val1, val2, ...num1 /* Rest operator */){
    return val1, val2, num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // 200, 400, [ 500, 2000 ]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // Username is hitesh and price is undefined
handleObject({
    username: "sam",
    price: 399
}) // Username is sam and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // 400