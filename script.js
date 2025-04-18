
 //import {add} from "./math.js";


//primitive types

//number
// let userId = 7602323129
// console.log("Value of User ID :", userId);
// console.log("Type of User ID :", typeof userId);

// //string
// let userEmail = "hashan@evotech.com";
// console.log("Value of User Email :", userEmail);
// console.log("Type of User Email :", typeof userEmail);

// //Boolean

// let isAuthenticated = false;
// console.log("Value of Auth :", isAuthenticated);
// console.log("Type of Auth :", typeof isAuthenticated);

// //nul
// let phoneNumber = null;
// console.log("Value of Phone :", phoneNumber);
// console.log("Type of Phone :", typeof phoneNumber);

// //Undefined
// let dob;
// console.log("Value of dob :", dob);
// console.log("Type of dob:", typeof dob);

// let uniqueId = Symbol("id");
// console.log("Value of UID :", dob);
// console.log("Type of UID:", typeof dob);

//Object
//let person = {name :"Hashan", age:29};
// console.log("Value of Person :",person);
// console.log("type of Person :", typeof person);
// console.log("value of Person :", person.age);
// console.log("type of Person :", typeof person.age);

// let myArray = [1, 2, 3, 4, 5];
// console.log("Value of My Array:", myArray);
// console.log("Type of My Array", typeof myArray);


// //before ES6
// function greet(name){
//     return `Hello, ${name}`;
// }

// //calling to a js function with a parameter
// console.log("Value of Greet:", greet("Hashan"));
// console.log("Type of Greet", typeof greet);


// //After ES6
// const greet2 = (name)=>{
//     return `Hello, ${name}`;
// };

// console.log("Value of Greet 2 :", greet2("Hashan"));
// console.log("Type of Greet 2 :", typeof greet2);

//Destructuring

//Nested user object

// let user = {name: "Hashan", 
//     age: 29,
//     data:{
//         uuid: "347834586",
//         token: "reghshhdjwhfugpo-hfjhki",
//         createdAt: "20-02-2025",
//         images: ["212344", "2626262", "5566776"]
//     }};
// const {name,age}=person;
// console.log("Name : ", person.name);
// console.log("Age : ", user.age);

// const {uuid}=user.data;
// console.log("UUID : ", uuid);

//Optional chaining
//Nullish Coalescing
// console.log("updatedAt:", user?.data?.updatedAt ?? "N/A");

//Spread & Rest Operator (ES6)

// const myArray = [1, 2, 3, 4, 5];
// const myArray2 =[...myArray, 6, 7];
// console.log(myArray, myArray2)
// 

//impoert & export
//LATER

const startTime = performance.now();

//console.log("I'm here before DOM Load!");


//Setting and item to the local storage
localStorage.setItem("username", "user123");
sessionStorage.setItem("email", "user@gmail.com");
//Event listener
document.addEventListener("DOMContentLoaded", (event)=>{
    const endTime = performance.now();
    const loadTime = (endTime - startTime).toFixed(2); //Calculate time in milliseconds

    // console.log("DOM fully loaded and parsed");
    // console.log(`DOM loaded time: ${loadTime} ms`);

    const mainTitle = document.querySelector("#main-title")
    //console.log(mainTitle);



    const mainButton = document.querySelector("#main-button");
   // console.log(mainButton);

    //Bind click event to the main button
    mainButton.addEventListener("click", () => {

    //Chanage the main title
    mainTitle.textContent = "I'm the changed title!"

        // setTimeout(() => {
        //   window.location.reload(true);
        // }, 200);
      });



});

//console.log("I'm here after DOM Load!");

// console.log("Username Is :",localStorage.getItem("username"));
// console.log("Username Is :",sessionStorage.getItem("email"));

// console.log(add(100, 50));

// if(sessionStorage.getItem("name") === null){
//     console.log("Name is not set!");
//     //sessionStorage.setItem("name", "Hashan");

// }else{
//     console.log("Name is :", sessionStorage.getItem("name"));
// }

// let myPromise = new Promise((resolve, reject) =>{

//     let success = true;
//     if(success){
//         resolve("Operation is successful");
//     }else{
//         reject("Operation is failed!");
//     }

// });

// myPromise
//     .then((message)=>{
//     console.log(message); //operation is successful!
// })
// .catch((error)=>{
//     console.log(error); //operation is failed!
// })
// .finally(() =>{
//     console.log("Promise is completed!");
// });