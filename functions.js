//in order to get this content into a console, simply create an html doc
//put the script at the bottom of the body, and src the script to functions.js
//use console in the dev tools to call the file results
//don't forget to refresh each time!!

function getGreeting() {
    return "Hello, World!";
}

const f = getGreeting;
//assigns getGreeting function to a variable

const o = {};
o.f = getGreeting;
//assigns the function getGreeting to an object property

const arr = [1, 2, 3];
arr[1] = getGreeting; //arr is now [1, function getGreeting(), 2]


getGreeting();


