1) What are the three states of a Promise?
    Pending: The task is in the initial state.
    Fulfilled: The task was completed successfully, and the result is available.
    Rejected: The task failed, and an error is provided.

2) How does the async keyword affect a function's return value?
    An async function always gives back a Promise, no matter what.
    If you return a regular value, JavaScript quietly wraps it in a resolved Promise.
    If something goes wrong and an error is thrown, it turns into a rejected Promise.

3) Explain the purpose of the await keyword.
    The await keyword is used inside an async function to pause the code until a Promise is settled.

    async function getData() {
        let result = await fetchData(); 
    console.log(result);
    }

4) What is a callback function and how is it used in asynchronous operations?
    A callback function is a function passed as an argument to another function. It's usually called after an operation finishes, especially in asynchronous code.

    function fetchData(callback) {
        console.log("Fetching data...");

         setTimeout(() => {
            callback("Data is ready!");
         }, 2000);
    }

     function showData(data) {
    console.log(data);
    }

    fetchData(showData); 

5) Describe the role of the event loop in JavaScript
    The event loop in JavaScript handles the execution order of code. 
        console.log("Start");

        setTimeout(() => {
         console.log("Timeout callback");
        }, 1000);

        console.log("End");

        In this code Synchronous tasks (console.log("Start") and console.log("End")) are executed first.
        The setTimeout callback is asynchronous and placed in the macrotask queue. It runs after 1 second when the call stack is empty. Then output like follow
        1. Start
        2. End
        3. Timeout callback

6) 

function delayedGreeting(name_callback) {
  setTimeout(() => {
    let name = "Sandeesha Rukshan";
    name_callback(name);
  }, 2000);
}

function afterGreet(name) {
  console.log("Welcome!", name);
}

delayedGreeting(afterGreet);
