// This


/*

 // Defined a variable that stores a function that returns a object

const user = function (username, price) {
    return {
        username: username,
        price: price,
        welcomeMessage: function() {
            console.log(`${this.username}, welcome to the website`);
            console.log(this);
        }
    };
};

// Create a new user object and immediately call welcomeMessage
user("Abhinav", 999).welcomeMessage();

*/

const user = {
    username: "ABhinav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // 
    }

}

user.welcomeMessage() // Abhinav , welcome to website
user.username = "Golu"
user.welcomeMessage() // Golu , welcome to website

console.log(this);


// ---------------------------------------------------------

//  Arrow Functions

/*

function chai(){
    let username = "Abhinav"
    console.log(this.username); //  We can't use this keyword in a normal function, only can be used in a object
} // Way 1 to define a function
chai()

const chai = function () {
    let username = "Abhinav"
    console.log(this.username);
} // Way 2 to define a function
chai()

*/


const chai =  () => {
    let username = "Abhinav"
    console.log(this);
} // Way 3 to define a function - Arrow function
chai()

const addOne = (num1) => {
    return num1
} // Return a value
// When we use {} then we have to use return keyword to return a value

const addTwo = (num1, num2) =>  num1 + num2 // Return a value
// When we don't use {} then we don't have to use return keyword to return a value

const addThree = (num1, num2, num3) => ( num1 + num2 + num3 ) // Return a value
// When we use () then we don't have to use return keyword to return a value

const returnObject = () => ({username: "hitesh"}) // Return a object
// When we use () but want to return a object then we have to use {} inside the ()


console.log(addOne(3)) // 3
console.log(addTwo(3, 4)) // 7
console.log(addThree(3, 4, 5)) // 12
console.log(returnObject()) // {username: "hitesh"}

