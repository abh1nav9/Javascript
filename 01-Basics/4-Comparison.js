console.log(2 > 1); // True
console.log(2 >= 1); // True
console.log(2 < 1); // False
console.log(2 == 1); // False
console.log(2 != 1); // True

// Convertion Before Comparison

console.log("2" > 1); // True
console.log("02" > 1); // True

// Avoid these type of comparisons or conversions

console.log(true == 1); // True
console.log(null > 0); // False
console.log(null == 0); // False
console.log(null >= 0); // True
console.log(undefined == 0); // False
console.log(undefined > 0); // False
console.log(undefined < 0); // False

// Strict Equality ( === ) and Loose Equality ( == )
// Strict Equality not only checks the value but also the datatype of the value

console.log("2" === 2); // False
console.log("2" === "2"); // True