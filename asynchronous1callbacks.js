//javascript has gone through three eras of asynchronous programming - the callback,
//the promise, and the generator. Each of these kind of rely on the preceding concept
//though, so it doesn't make sense to only discuss the latter.

//callbacks and promises: 
//callback - you provide something that will allow the other party to say 'ready!'
//promise - the other party provides you with something that will let you know 'ready!'

//A callback is simply a function that will be invoked at some point in the future.
//callbacks are often anonymous functions;

/* console.log(`before timeout: ${new Date()}`);
function f() {
    console.log(`after timeout: ${new Date()}`);
}
setTimeout(f, 10*1000);//we're gonna whittle that down to 10 seconds!
console.log(`I happen after setTimeout`);
console.log(`me too`); */
//logs everything except line 14, which gets logged after 10 secs;

//setInterval and clearInterval:

const start = new Date();
let i=0;
const intervalId = setInterval(function(){
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || i>10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);

}, 5*1000);

//why does this run automatically?
//another example of why this book can be maddening. 
//probably because setInterval is immediately invoked function expression?
//naming it doesn't prevent it from functioning, just provides a way to stop it....
//Jesus!
