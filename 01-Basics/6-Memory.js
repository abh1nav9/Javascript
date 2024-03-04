// 2 Types of Memory in Javascript -- Stack and Heap

// Stack ( Primitive Data Types )
// Whenever we use Stack memory we get a copy of the value

let fullName = "Abhinav Gautam";
let nickName = fullName;

nickName = "Golu";

console.log(fullName); // "Abhinav Gautam";
console.log(nickName); // "Golu";

// Here we change the Nickname which was refrenced by the Fullname 
// But it did not change the Fullname because it was a copy of the Fullname


// --------------------------------------------------


// Heap ( Non Primitive Data Types )
// Whenever we use Heap memory we get a reference to the value

let userOne = { name: "Abhinav", age: 21 };
let userTwo = userOne;

userTwo.name = "Golu";

console.log(userOne.name); // "Golu";
console.log(userTwo.name); // "Golu";

// Here we change the userTwo.name which was refrenced by the userTwo.name 
// But it change the userOne.name also because it was a refrenced by the userOne.name and was not a copy of the userOne.name

