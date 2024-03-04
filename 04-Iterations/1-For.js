/*

For Loop
Syntax

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

// Print table of 5 using for loop

let table = [];

for(let i=1; i<=10; i++){
    table[i-1] = i * 5;
}

console.log(table);

// Nested For Loop

let array = [5, 1, 4, 2, 3];
console.log("Unsorted Array:", array);

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        // Compare adjacent elements and swap if they are in the wrong order
        if (array[j] > array[j + 1]) {
            // Swap array[j] and array[j+1]
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log("Sorted Array:", array);