//create array called greetings
let greetings = ["Hello, World!", "¡Hola, Mundo!", "Hallo Wereld!"];

//create function called getGreetings
function getGreetings() {
    //for loop sets index at zero, runs for as long as index is less than
    //the number of indexes in array "greetings", increments index by one
    for (i=0; i<greetings.length; i++) {
        //logs to console the string indexed by i, for every iteration
        console.log(greetings[i]);
    }
}
//calls the function getGreetings
getGreetings();