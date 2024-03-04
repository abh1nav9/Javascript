// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){
    
    console.log(`DB CONNECTED`);
})();

// Anonymous IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Abhinav')
