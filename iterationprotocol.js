//the iterator protocol enables any object to be iterable:
//if you wanted to create a logging class that attaches timestamps to messages:

/* class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.message.push({message, timestamp: Date.now()});
    }
} */

//so far so good, but what if we want to iterate over the entries in the log?
//we could access 'log.messages', but what if log were directly iterable?
//this is what the iteration protocol does.
//the iteration protocol says that if your class provides a symbol method 'Symbol.iterator'
//(i.e. has a 'next' method that returns an object with 'value' and 'done' properties)
//it is then iterable!!

class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({message, timestamp: Date.now()});
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();

log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

//check this out:

for(let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}

//here we got an iterator from the messages array, but we could have
//written our own:

/* 
class Log {
    //...
    [Symbol iterator]() {
        let i=0;
        const messages = this.message;
        return{
            next() {
                if(i>=messages.length) {
                    return { value: undefined, done: true};
                return {value: messages[i++], done: false};
                }
            }
        }
    }
} */

//luckily, this is already built in!

