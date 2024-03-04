// We can use for of loop to iterate over array, map, set, string, etc.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`)
}

const array = [10, 20, 30, 40, 50];

for (const [index, value] of array.entries()) {
    console.log(`Value of index ${index} is ${value}`);
    
}
