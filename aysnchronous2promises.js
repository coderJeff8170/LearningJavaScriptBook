import { promises } from "fs";

//promises are the pager you have to let you know when the table is ready
//something you have that will alert you when something is done
//you still have to use callbacks with promises
//soo, you'd give something and be given something? I think I need a different analogy..

//promises simply ensure that callbacks are handled in a predictable manner.
//when you call a promise-based asynch function, it returns a 'Promise' instance.
//only two things can happen with that promise:
//it can be fulfilled(success), or rejected(failure) - you are guaranteed that only one of these will happen
//once, and then the promise is considered 'settled'

//a promise instance is an object, and can therefore be passed around...
//if you want to start some asynch code and let someone else handle the result you can pass
//off the promise.

//creating a promise:
//you create a Promise instance with resolve and reject callbacks

function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i=seconds; i>=0; i--) {
            setTimeout(function() {
                if(i>0) console.log(i + '...');
                else resolve(console.log("GO!"));
            }, (seconds-i)*1000);
        }
    });
}

countdown(5);

//doesn't currently work...