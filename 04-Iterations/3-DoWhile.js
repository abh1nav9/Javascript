let table = [];
let tableIndex = 1;

do {
    
    table[tableIndex - 1] = tableIndex * 5;
    tableIndex++;
} while (tableIndex <= 10);

console.log("Table of 5 is : " , table);