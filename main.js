//JavaScript Comments
//JavaScript console Log

/*
Here's is
the 
multiline comment
*/

//snake-case(old)
var user_email = "user@epiclearn.com";
//snake-case capital for constant values
const APP_URL = "http://127.0.0.1:5500/";

//camel-case (New standard)
//var userEmail = "user@epiclearn.com";

//pascal-case(not commonly used)
//var UserEmail = "user@epiclearn.com";

//Variable declaration with var
//Global Variables
var message;

//ES6 (2015)
//Can be scoped local/function wise
//Variable declaration with let

//local scoped
{
let message2
//Variable declaration with const
const message3 ="Hello! I'm a const variable";
}

function myFunction(){
    let myVariable = 5000;
    //console.log("Log 2:",myVariable);
}

//later Initialization
message ="Hello, World!";

//re declaration
message ="Hello, World! 2";

//console.log("LOG 1:", message);
myFunction()