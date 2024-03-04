// OBJECT - Part 1

// Object literals Method
// Non Singleton

const mySym = Symbol("key1") // Symbol is unique, it will not be equal to any other symbol


const JsUser = {
    name: "Abhinav",
    "full name": "Abhinav Gautam",
    [mySym]: "mykey1",
    age: 21,
    location: "Bijnor",
    email: "abhinav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // Object Syntax - Key: Value

console.log(JsUser.email) // Dot notation
console.log(JsUser["email"]) // Bracket notation
console.log(JsUser["full name"]) // Bracket notation
console.log(JsUser[mySym]) // Bracket notation

JsUser.email = "abhinav@chatgpt.com" // Update value
// Object.freeze(JsUser) - It will freeze the object, we can't update the object after freezing
JsUser.email = "abhinav@microsoft.com"
console.log(JsUser); // 

JsUser.greeting = function(){
    console.log("Hello JS user");
} // Method - Function inside object
console.log(JsUser.greeting()); // Hello JS user

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // '${}' - Template literals - String interpolation, we can use variable inside string
} // Method - Function inside object
console.log(JsUser.greetingTwo()); // Hello JS user, Abhinav

JsUser.salute = function(){
    console.log("Jai HInd");
}
console.log(JsUser.salute()); // Jai HInd

delete JsUser.greetingTwo // Delete method
console.log(JsUser); // Method will be deleted


// ----------------------------------------------------------------------------

// Object - Part 2 

// Constructor Method
// Singleton 

// Object.create() // It will create object with prototype

const tinderUser = new Object() // Object constructor
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhinav",
            lastname: "Gautam"
        }
    }
} // Nested object

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "c"}
const obj3 = {5: "d", 6: "e"}

const obj4 = { obj1, obj2 } // It will create object with key as object name and value as object
console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'c' } }

const obj5 = Object.assign({}, obj1, obj2, obj4) // Object.assign(target, value) All values will be stored or merget in the target - It will merge all objects
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'c', obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'c' } }

const obj6 = {...obj1, ...obj2} // Spread operator
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'c', '4': 'c' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] // Array of objects

users[1].email
console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Abhinav"
}

// course.courseInstructor - Dot notation or traditional way

const {courseInstructor: instructor} = course // Destructuring object

console.log(course.courseInstructor); // Abhinav
console.log(instructor); // Abhinav


// API Object Structure
// {
//     "name": "Abhinav",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// API Array of Objects Structure
// [
//     {},
//     {},
//     {}
// ]

