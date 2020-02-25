//promises can be chained so that when one is fulfilled, the next can be invoked:

//first, we need countdown - (let's figure out how to import this instead...)

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


function launch() {
    return new Promise (function(resolve, reject) {
        console.log('Lift Off!');
        setTimeout(function() {
            resolve("In Orbit!");
        }, 2*1000);
    });
}

//i think we might need to import countdown

const c = new Countdown(15, true)
    .on('tick', i => console.log(i + '...'));

c.go()
    .then(launch)
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.error('Houston, we have a problem...');
    })