//events:
//Basically, an event emitter broadcasts events, and whoever wants to listen for them
//can subscribe to them. How do you subscribe to an event? A callback of course!
//(You can create your own event system easily, but EventEmitter is built into node and 
//has browser support with jQuery) - we'll be using node and since the last countdown didn't work...

//I wonder if this is the same stuff as event handlers, and I'm calling back all the time
//without realizing it?

//EventEmitter can be used with a function like countdown, but it's designed to be used with a class:

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go() {
        const countdown = this;
        //need an empty array for timeoutIds??
        const timeoutIds = [];
        return new Promise(function(resolve, reject) {
            for(let i=countdown.seconds; i>=0; i--) {
                timeoutIds.push(setTimeout(function() {
                    if(countdown.superstitious && i===13) {
                    //new functionality added here to clear all past 13
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("DEFINITELY NOT COUNTING THAT!!"));
                    }
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        });
    }
}

//notice that countdown is set to 'this'. We need the length of the countdown, and we need it to be INSIDE the callback function. 'this' will change over the course of the runtime, but assigning it's value to countdown at that precise moment enables us to use the countdown variable elsewhere in the new promise.

// const c = new Countdown(9);

// c.on('tick', function(i) {
//     if(i>0) console.log(i + "...");
// });

// c.go()
//     .then(function() {
//         console.log('GO!');
//     })
//     .catch(function(err) {
//         console.error(err.message);
//     })

//since countdown takes a second param, whether superstitious or not, lets see what happens:

const c = new Countdown(15, false);

c.on('tick', function(i) {
    if(i>0) console.log(i + "...");
});

c.go()
    .then(function() {
        console.log('GO!');
    })
    .catch(function(err) {
        console.error(err.message);
    })
//we still get all of the counts past 13...
//if we want to stop that we have to add functionality to the class Countdown^^
//Very cool!

