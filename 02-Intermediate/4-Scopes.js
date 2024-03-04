var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a); // We can access a because it is defined using let
console.log(b); // We can't access b because it is defined using const
console.log(c); // We can access c because it is defined using var
// var is a global scope variable, that's why we avoid using it


function one(){
    const username = "Abhinav"

    function two(){
        const website = "LeetCode"
        console.log(username); // We can access username because it is defined outside the function two
    }
    console.log(website); // We can't access website because it is defined inside the function two

     two() // We can call this function inside the function one

}

one() // We can call this function outside the function one

if (true) {
    const username = "Abhinav"
    if (username === "Abhinav") {
        const website = "LinkedIN"
        console.log(username + website);
    }
    console.log(website); // We can't access website because it is defined inside the if block
}

console.log(username); // We can't access username because it is defined inside the if block


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // We can call this function before defining it - When a variable don't stores a function

function addone(num){
    return num + 1
} // Way to define a function



addTwo(5) // We cant call this function before defining it - When a variable stores a function
const addTwo = function(num){
    return num + 2
} // Another way to define a function