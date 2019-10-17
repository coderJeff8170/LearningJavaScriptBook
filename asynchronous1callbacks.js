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
/* 
const start = new Date();
let i=0;
const intervalId = setInterval(function(){
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i>10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);

}, 1*1000);//logs the date/time every second 10 times, or if the minutes aren't the same */

//why does this run automatically?
//another example of why this book can be maddening. 
//probably because setInterval is immediately invoked function expression?
//naming it doesn't prevent it from functioning, just provides a way to stop it....
//Jesus!

/* function countdown() {
    let i;
    console.log('countdown!');
    for(i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }
}
countdown(); */

//here, i is outside of the 'for' loop. Remember when I couldn't figure out why the function didnt run
//sooner the last time we saw this? it's because of the way scope and asyncronous work, and here
//the culprits are declaring i outside of the loop AND a function that runs in the future (setTimeout)
//the function that's passed to setTimeout is the asynchronous part and only runs once setTimeout is done
//in this case. 

//if we move the declaration of inside the for loop tho....

function countdown() {
    console.log('countdown!');
    for(let i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }
}
countdown();

//Error first callbacks -
// i dont understand this completely YET. But if you have to write a callback it should follow
//the error first convention - check for an error first, and if true, immediately return - apparently
//programmers often overlook this..

//eg:

const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data) {
    if(err) return console.error(`error reading file ${fname}: ${err.message}`);
    console.log(`${fname} contents: ${data}`);
});

//^^ note the return
//interesting result: error reading file may_or_may_not_exist.txt: ENOENT: no such file or directory, open 'may_or_may_not_exist.txt'
//actually works even without the required file - node provides some extra documentation
//and it runs at second two (between 5 and 4) of the countdown! Talk about asynchronous!!