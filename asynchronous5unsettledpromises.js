//so here we have added a timeout with a new error, promise timed out. It's funny how a new error always seems to supercede the one in the class, I guess because each time you make an instance of countdown, that can be changed... Anyway, even if the launch fails (which here is half the time), you'll get an error message of what went wrong because nothing got returned and we were looking for a timeout if that was the case.. The add timeout function is pretty advanced and left to future Jeff's understanding...


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



function launch () {
    return new Promise(function(resolve, reject) {
        if(Math.random()<0.5) return;
        console.log('lift off!');
        setTimeout(function() {
            resolve('In orbit!');
        }, 2*1000);
    });
}


function addTimeout(fn, timeout) {
    if(timeout === undefined) timeout = 1000;//default timeout
    return function(...args) {
        return new Promise(function(resolve, reject) {
            const tid = setTimeout(reject, timeout,
                new Error('promise timed out!'));
            fn(...args)
                .then(function(...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function(...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
            })
    }
}

const c = new Countdown(11)
    .on('tick', i => console.log(i + '...'));

c.go()
    .then(addTimeout(launch, 4*1000))
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.error('Houston, we have a problem...' + err.message);
    });