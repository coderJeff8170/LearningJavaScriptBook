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
    constructor(seconds, superstitiuos) {
        super();
        this.seconds = seconds;
        this.supertitious = !!superstitiuous;
    }
    go() {
        const countdown = this;
        return new Promise(function(resolve, reject) {
            for(let i=countdown.seconds; i>=0; i--) {
                setTimeout(function() {
                    if(countdown.superstitious && i===13)
                        return reject(new Error("DEFINITELY NOT COUNTING THAT!!"));
                    countdown.emit('tick', i);
                    if(i===0) resolve();
                }, (countdown.seconds-i)*1000);
            }
        });
    }
}

