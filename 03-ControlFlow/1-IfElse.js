// IF

let username = "Abhinav";
if(username == "Abhinav"){
    console.log("Welcome Abhinav");
}

// IF ELSE 

let isLoggedIn = true;

if(isLoggedIn){
    console.log("Welcome User");
}
else{
    console.log("Please login");

}

//ELSE IF Ladder

let age = 18;

if(age >= 18){
    console.log("You are eligible to vote");
}
else if(age < 18){
    console.log("You are not eligible to vote");
}
else{
    console.log("Please enter valid age");
}

// Nested IF ELSE

let isLogged = true;
let isAdmin = true;

if(isLogged){
    if(isAdmin){
        console.log("Welcome Admin");
    }
    else{
        console.log("Welcome User");
    }
}
else{
    console.log("Please login");
}

