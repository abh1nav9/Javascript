// Array
// Part 1

const myArr = [0, 1, 2, 3, 4, 5] // array of numbers
const myHeors = ["Shaktiman", "Naagraj"] // array of strings

const myArr2 = new Array(1, 2, 3, 4) // another way to create array
console.log(myArr[1]); // 1

// Array methods

myArr.push(6) // add passed element at the end in array
myArr.push(7) // add passed element at the end in array
myArr.pop() // remove last element from the array

myArr.unshift(9) // add passed element at the start in array
myArr.shift() // remove first element from the array

console.log(myArr.includes(9)); // check if passed element is in array, it returns boolean
console.log(myArr.indexOf(3)); // check if passed element is in array, it returns index of element

console.log(myArr); // Before Join => [ 9, 1, 2, 3, 4, 5, 6 ]

const myArr3 = myArr.join() // join all elements of array and return as string. 
// Default separator is comma, we can pass separator as well like myArr.join('-')

console.log( myArr3); // After Join => 9,1,2,3,4,5,6


// Slice - copy elements from array

let newArr = [1,2,3,4,5];
let partArr = newArr.slice(1, 4); // start, end (end is not included)
console.log(partArr); // [ 2, 3, 4 ]

// Splice - remove and add elements from array
let removed = newArr.splice(1, 2); // start, count (count is optional)
console.log(removed); // [ 2, 3 ]
// Splice will manipulate the original array
console.log(newArr); // [ 1, 4, 5 ]


// ----------------------------------------------------------------------------


// Array
// Part 2


const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros) // Push array as element

console.log(marvel_heros); // [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ], It will push array as element
console.log(marvel_heros[3][1]); // Flash

const allHeros = marvel_heros.concat(dc_heros) // concat two arrays
console.log(allHeros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread operator
console.log(all_new_heros); // [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // Nested array

const real_another_array = another_array.flat(Infinity) // Will flatten the nested array
console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


console.log(Array.isArray("Abhinav")) // false
console.log(Array.from("Abhinav")) // [ 'A', 'b', 'h', 'i', 'n', 'a', 'v' ] - Way to convert various elements into array
console.log(Array.from({name: "Abhinav"})) // [] - It will return empty array, because we have to specify on what basis we want to create array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ] - Another way to convert varoius elements into array

